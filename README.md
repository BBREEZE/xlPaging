# xlPaging
一个简单的分页插件，支持ajax，可以自定义展示数量

# 效果展示
![](README_files/1.jpg)
![](README_files/2.jpg)
![](README_files/3.jpg)
![](README_files/5.jpg)
# 使用方法

1. 下载并引入JQuery和xlPaging.js
2. 在页面中增加一个盛放分页的DIV
    ```
         <div id="page"></div>
    ```
3. 在JS中对分页进行配置,其中pageNum为必写项。
   简单模式
   ```
        $("#page").paging({
            pageNum: 7, //总页码
            callback: function (num) { //回调函数,num为当前页码
                console.log(num);
            }
        });
    ```
    高级模式
    ```
        $("#page").paging({
            nowPage: 1, // 当前页码,默认为1
            pageNum: 20, // 总页码
            buttonNum: 7, //要展示的页码数量，默认为7，若小于5则为5
            callback: function (num) { //回调函数,num为当前页码
                console.log(num);
            }
        });
    ```
4. 对分页进行个性化
   ```
        <style>
		//#page 的page是您自定义的id
        #page {
            margin: 20px auto;
            color: #666;
            display: block;
            text-align: center;
        }
		//所有li的样式
        #page li {
            display: inline-block;
            min-width: 30px;
            height: 28px;
            cursor: pointer;
            color: #666;
            font-size: 13px;
            line-height: 28px;
            background-color: #f9f9f9;
            border: 1px solid #dce0e0;
            text-align: center;
            margin: 0 4px;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
        }
		//上一页和下一页的样式
        .xl-nextPage,.xl-prevPage {
            width: 60px;
            color: #0073A9;
            height: 28px;
        }
		//失效状态样式
        #page li.xl-disabled {
            opacity: .5;
            cursor: no-drop;
        }
		//当前页码显示状态
        #page li.xl-active {
            background-color: #0073A9;
            border-color: #0073A9;
            color: #FFF
        }
    </style>
   ```

# 分页结构
```
    <div id="page">
        <ul>
            <li class="xl-prevPage">上一页</li>
            <li>1</li>
            <li class="xl-disabled">...</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li class="xl-active">20</li>
            <li class="xl-nextPage xl-disabled">下一页</li>
        </ul>
    </div>
```

# 下一步计划
1. 增加多种样式
2. 去JQuery