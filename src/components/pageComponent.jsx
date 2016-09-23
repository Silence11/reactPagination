/**
 * Created by xiajing on 2016/9/22.
 */
import React, { Component } from 'react';
class PageComponent extends  Component{
    constructor(props){
        super(props);
        this.state = {
            current: 1, //当前页码
            value:'',
            pageSize:1,//  //每页显示的条数5条
            pageNum:[],// //显示分页按钮
            totalPage:''//计算总页数= 总记录数 / 每页显示的条数
        }
    }
    componentDidMount(){
        let _this = this;
        //总记录数
        let total = this.props.total;
        //当前页码
        let cur = this.props.current;
        ////每页显示的条数5条
        //let pageSize = 1;
        //显示分页按钮
        let begin;
        let len;
        //计算总页数= 总记录数 / 每页显示的条数
        _this.setState({totalPage:Math.ceil( total / this.props.pageSize)})
        //console.log("总页数："+ totalPage);
        if(_this.state.totalPage > 5){
            len = 5;
            if(cur >= (_this.state.totalPage-2)){
                begin = _this.state.totalPage - 4;
            }else if(cur <= 3){
                begin = 1;
            }else{
                begin = cur - 2;
            }
        }else{
            len = _this.state.totalPage;
            begin = 1;
        }
        //根据返回的总记录数计算当前页显示的数据
        for(let i = 0; i < len; i ++){
            let cur = this.props.current;
            let showI = begin + i;
            if(cur == showI){
                _this.state.pageNum.push({num : showI, cur : true});
            }else{
                _this.state.pageNum.push({num : showI, cur : false});
            }
        }
        //console.log("当前页："+cur)
        console.log(_this.state.pageNum);
    }
    handChange(e){
       this.setState({value : e.target.value})
        var val = e.target.value;
        if(!/^[1-9]\d*$/.test(val)){
            alert('页码只能输入大于1的正整数');
        }else if(parseInt(val) > parseInt(this.props.total)){
            alert('没有这么多页');
        }else{
            this.setState({current : val});
        }
   }
    goNext(){
        let cur = this.state.current;
        if(cur < this.props.total){
            this.setState({current : cur + 1});
        }
}
    goPrev(){
        let cur = this.state.current;
        if(cur > 1){
            this.setState({current : cur - 1});
        }
}
    render(){
        //let _this = this;
        ////总记录数
        //let total = this.props.total;
        ////当前页码
        //let cur = this.props.current;
        //////每页显示的条数5条
        ////let pageSize = 1;
        ////显示分页按钮
        //let pageNum = [];
        //let begin;
        //let len;
        ////计算总页数= 总记录数 / 每页显示的条数
        //let totalPage =Math.ceil( total / this.props.pageSize);
        ////console.log("总页数："+ totalPage);
        //if(totalPage > 5){
        //    len = 5;
        //    if(cur >= (totalPage-2)){
        //        begin = totalPage - 4;
        //    }else if(cur <= 3){
        //        begin = 1;
        //    }else{
        //        begin = cur - 2;
        //    }
        //}else{
        //    len = totalPage;
        //    begin = 1;
        //}
        ////根据返回的总记录数计算当前页显示的数据
        //for(let i = 0; i < len; i ++){
        //    let cur = this.props.current;
        //    let showI = begin + i;
        //    if(cur == showI){
        //        pageNum.push({num : showI, cur : true});
        //    }else{
        //        pageNum.push({num : showI, cur : false});
        //    }
        // }
        ////console.log("当前页："+cur)
        // console.log(pageNum);
        var _this = this;
        return(
          <div>
              <div className="paginationDiv">
                  <a className={this.props.current == 1? 'prev disable' : 'prev'} onClick={this.goPrev.bind(this)}></a>
                    <span>
                        {
                            this.state.pageNum.map(function(curPageNum){
                                //return <a  onClick={_this.handClick(curPageNum.num).bind(this)} className={curPageNum.cur ? 'num current' : 'num'}>{curPageNum.num}</a>
                                return(
                                    <a onClick = {_this.props.pageClick(curPageNum.num)} className={curPageNum.cur ? 'num current' : 'num'}>{curPageNum.num}</a>
                                )
                            })
                        }
                    </span>
                  <a className={this.props.current == this.props.total? 'next disable' : 'next'} onClick={this.goNext.bind(this)}></a>
                  <div className="rightDiv">
                      共
                      <span className="num-total">{_this.state.totalPage}</span>
                      页，到第 
                      <input type="text" value={_this.state.value} onChange={this.handChange.bind(this)} />
                      页
                  </div>
              </div>
          </div>
        )
    }
}
export default PageComponent