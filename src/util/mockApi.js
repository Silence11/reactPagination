/**
 * Created by xiajing on 2016/9/23.
 */
import Mock from 'mockjs';
//首页自定义数据接口 采用array的方式
module.exports = {
    getIndexList(){
        var template ={
            "array|1-20":[
                {
                    'scoreChinese|+1':[
                        '70'
                    ],
                    'scoreMath|+1':[
                        '90'
                    ],
                    'scoreEnglish|+1':[
                        '80'
                    ]
                }
            ]
        }
        Mock.mock(/\.json/,template)
    }
}
