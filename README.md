# xlPaging
一个简单的分页插件，支持ajax
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
            pageNum: 7, //要展示的页码数量
            callback: function (num) { //回调函数,num为当前页码
                console.log(num);
            }
        });
    ```
    高级模式
    ```
        $("#page").paging({
            nowPage: 1, // 当前页码
            pageNum: 20, // 总页码
            buttonNum: 6, //要展示的页码数量
            callback: function (num) { //回调函数,num为当前页码
                console.log(num);
            }
        });
    ```
4. 对分页进行个性化
   ```
        <style>
        #page {
            margin: 20px auto;
            color: #666;
            display: block;
            text-align: center;
        }

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

        .xl-nextPage,.xl-prevPage {
            width: 60px;
            color: #0073A9;
            height: 28px;
        }

        #page li.xl-disabled {
            opacity: .5;
            cursor: no-drop;
        }

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