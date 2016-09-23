/**
 * Created by xiajing on 2016/9/22.
 */
import React, { Component } from 'react';
import PageComponent from './pageComponent.jsx';
import Mock from 'mockjs';
import MockApi from '../util/mockApi.js';
class Pagination extends  Component{
    constructor(props){
        super(props);
        this.state = {indexList : [], totalNum:'',dataTotal:'',
            totalData:{},
            current: 1, //当前页码
            pageSize:1//  //每页显示的条数5条
        }
    }
    componentWillMount(){
         var _this = this;//如果不定义就会出现作用域的问题this.setState不是一个函数
        $.ajax({
            url:MockApi.getIndexList()+/\/\.json/,
            dataType:'json',
        }).done(function(data){
            _this.setState({totalData:data})
            _this.setState({totalNum:data.array.length})
            _this.pageClick(1)
        })

    }
   pageClick(e){
       console.log("==ss=")
        let _this = this;
        console.log(e)
       return function(){
            _this.setState({current : e});
           alert("asdfasdfasdf ")
           //_this.setState({indexList:[]});//清空之前的数据
           var curPageTotal = _this.state.current;
           for(var i = (curPageTotal - 1) * _this.state.pageSize; i< _this.state.pageSize * curPageTotal; i++){
               if(_this.state.totalData.array[i]){
                   _this.state.indexList.push(_this.state.totalData.array[i])
               }
           }
           console.log(_this.state.indexList)
       }
    }
    render(){
        return(
          <div>
              <table class="table table-bordered">
                  <thead>
                  <tr>
                      <th>语文</th>
                      <th>数学</th>
                      <th>英语</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                      this.state.indexList.map(function(data){
                          return(
                              <tr>
                                  <td>{data.scoreChinese}</td>
                                  <td>{data.scoreMath}</td>
                                  <td>{data.scoreEnglish}</td>
                              </tr>
                          )
                      })
                  }
                  </tbody>
              </table>
           <PageComponent total={this.state.totalNum}
                          current={this.state.current}
                          pageSize={this.state.pageSize}
                          pageClick={this.pageClick.bind(this)}/>
          </div>
        )
    }
}
export default Pagination