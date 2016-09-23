/**
 * Created by xiajing on 2016/9/22.
 */
import React, { Component } from 'react';
class PageComponent extends  Component{
    constructor(props){
        super(props);
        this.state = {current: 1, value:''}
    }
    handClick(e){
        let _this = this;
        return function(){
            _this.setState({current : e});
        }
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
        let _this = this;
        let total = this.props.total;
        let cur = this.state.current;
        let items = [];
        let begin;
        let len;
        if(total > 5){
            len = 5;
            if(cur >= (total-2)){
                begin = total - 4;
            }else if(cur <= 3){
                begin = 1;
            }else{
                begin = cur - 2;
            }
        }else{
            len = total;
            begin = 1;
        }
        for(let i = 0; i < len; i ++){
            let cur = this.state.current;
            let showI = begin + i;
            if(cur == showI){
                items.push({num : showI, cur : true});
            }else{
                items.push({num : showI, cur : false});
            }
         }
        return(
          <div>
              <div className="paginationDiv">
                  <a className={this.state.current == 1? 'prev disable' : 'prev'} onClick={this.goPrev.bind(this)}></a>
                    <span>
                        {
                            items.map(function(item){
                                return <a onClick={_this.handClick(item.num).bind(this)} className={item.cur? 'num current' : 'num'}>{item.num}</a>
                            })
                        }
                    </span>
                  <a className={this.state.current == this.props.total? 'next disable' : 'next'} onClick={this.goNext.bind(this)}></a>
                  <div className="rightDiv">
                      共
                      <span className="num-total">{total}</span>
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