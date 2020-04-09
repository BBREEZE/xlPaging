# xlPaging

A simple paging, support ajax, support custom display page number.

## Effect display

![img](README_files/1.jpg)
![img](README_files/2.jpg)
![img](README_files/3.jpg)
![img](README_files/5.jpg)

## How to use

1. Download and import `xlPaging.js`

2. Place a div in page where to place the paging

    ``` javascript
         <div id="page"></div>
    ```

3. Config the paging plugin, `pageNum` is required.

   3.1  Simple Example

   ```javascript
    let xlPaging =new Paging('page', {
      pageNum: 100, // Total number of paging
      callback: function (num) { //click to do, num is clicked paging number
        console.log(num);
      }
    })
    ```

    3.2 Advanced example

    ```javascript
    let xlPaging =new Paging('page', {
      nowPage: 6, // Page number of now
      pageNum: 100, // Total number of paging
      buttonNum: 5, // How many button would you like to show
      canJump: 1,// Would you like to show the jump button? 0=not show(default),1=show
      showOne: 1,// If only one page, would you like to show the paging? 0=not show,1=show(default)
      callback: function (num) { //click to do, num is clicked paging number
        console.log(num);
      }
    })
    ```

4. Cutsom the css

  ``` javascript

  <style>
    //#page page is your custom id
        #page {
            margin: 20px auto;
            color: #666;
            display: block;
            text-align: center;
        }
    // all li css
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
    //prev and next button css
        .xl-nextPage,.xl-prevPage {
            width: 60px;
            color: #0073A9;
            height: 28px;
        }
    //disable button css
        #page li.xl-disabled {
            opacity: .5;
            cursor: no-drop;
        }
    //active button css
        #page li.xl-active {
            background-color: #0073A9;
            border-color: #0073A9;
            color: #FFF
        }
    //jump text button css
       #page li.xl-jumpText {
          background-color: rgba(0,0,0,0);
          border-color: rgba(0,0,0,0);
          opacity: 1;
        }
    //jump button css
      #page li.xl-jumpButton{
        padding: 0 5px;
      }
    </style>
  // Css Example

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

    .xl-nextPage,
    .xl-prevPage {
        width: 60px;
        color: #0073A9;
        height: 28px;
    }

    #page li.xl-disabled {
        opacity: .5;
        cursor: no-drop;
    }

    #page li.xl-disabled:hover{
      background-color: #f9f9f9 !important;
        border: 1px solid #dce0e0 !important;
      color: #666 !important;
    }

    #page li.xl-active {
        background-color: #0073A9;
        border-color: #0073A9;
        color: #FFF
    }

    #page li:hover{
      background-color: #0073A9 !important;
        border-color: #0073A9;
        color: #FFF
    }

     #page li.xl-jumpText {
        background-color: rgba(0,0,0,0);
      border-color: rgba(0,0,0,0);
      opacity: 1;
    }

    #page li.xl-jumpText:hover{
      background-color: rgba(0,0,0,0) !important;
      border-color: rgba(0,0,0,0) !important;
    }

    #page li.xl-jumpButton{
      padding: 0 5px;
    }

    #xlJumpNum {
      width: 35px;
      margin: 0 3px;
    }
    input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{
      -webkit-appearance: none !important;
    }
    input[type="number"]{
      -moz-appearance:textfield;
    }
  </style>

  ```

## Paging Structure

There is a bug, that we can't change the text in paging, we will fix it in next version, we can change the text by config the paging.

```javascript
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
            <li class="xl-jumpText xl-disabled">跳转到<input type="number" id="xlJumpNum">页</li>
            <li class="xl-jumpButton">确定</li>
        </ul>
    </div>
```

## QQ Group:725227425

1. Report the bugs
2. Communicate web technology

## To do

1. Add more style to choose
2. ~~Delete JQuery~~
3. Using virtual DOM to improve performance
