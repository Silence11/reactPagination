/**
 * Created by xiajing on 2016/9/22.
 */
import React, { Component } from 'react';
import PageComponent from './pageComponent.jsx';
class Pagination extends  Component{
    render(){
        return(
          <div>
           <PageComponent total="10"/>
          </div>
        )
    }
}
export default Pagination