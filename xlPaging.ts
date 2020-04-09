class Paging {
    protected nowPage: number
    protected pageNum: number
    protected canJump: number
    protected showOne: number
    protected buttonNum: number
    protected callback: Function
    protected element: HTMLElement

    constructor(public elementName: string, public options: PageOptions){
        options.nowPage = options.nowPage >= 1 ? options.nowPage : 1 
        options.pageNum = options.pageNum > 0 ? options.pageNum : 0
        options.canJump = options.canJump || 0
        options.showOne = options.showOne || 0
        options.buttonNum = (options.buttonNum >= 5 ? options.buttonNum : 5) || 7
        this.nowPage = options.nowPage > options.pageNum ? options.pageNum : options.nowPage
        this.pageNum = options.pageNum < 0 ? 0 : options.pageNum
        this.canJump = options.canJump
        this.showOne = options.showOne
        this.buttonNum = options.buttonNum
        this.callback = options.callback
        this.element = document.getElementById(elementName)
        this.init()
    }

    init (){
        this.createHtml()
    }

    createHtml (){
        let content = []
        //如果pageNum小于等于0则不渲染
        if(this.pageNum <= 0){
            return ''
        }
        //如果只有一页并且设置为不显示，则不进行渲染
        if(!this.showOne && this.pageNum === 1){
            this.element.innerHTML = ''
            return ''
        }
        content.push("<ul>");
        content.push("<li class='xl-prevPage'>上一页</li>");
        //页面总数小于等于当前要展示页数总数，展示所有页面
        if(this.pageNum <= this.buttonNum){
            for(var i=1; i<=this.pageNum; i++){
                if (this.nowPage !== i) {
                    content.push("<li>"+i+"</li>");
                } else {
                    content.push("<li class='xl-active'>"+i+"</li>");
                }
            }
        }else if(this.nowPage <= Math.floor(this.buttonNum / 2)){
            //当前页面小于等于展示页数总数的一半（向下取整），从1开始
            for(var i=1;i<= this.buttonNum-2;i++){
                if (this.nowPage !== i) {
                    content.push("<li>"+i+"</li>");
                } else {
                    content.push("<li class='xl-active'>"+i+"</li>");
                }
            }
            content.push("<li class='xl-disabled'>...</li>");
            content.push("<li>" + this.pageNum + "</li>");
        }else if(this.pageNum - this.nowPage <= Math.floor(this.buttonNum / 2)){
            //当前页面大于展示页数总数的一半（向下取整）
            content.push("<li>"+1+"</li>");
            content.push("<li class='xl-disabled'>...</li>");
            for(var i=this.pageNum-this.buttonNum+3; i<=this.pageNum; i++){
                if (this.nowPage !== i) {
                    content.push("<li>"+i+"</li>");
                } else {
                    content.push("<li class='xl-active'>"+i+"</li>");
                }
            }
        }else{
            //前半部分页码
            if(this.nowPage - Math.floor(this.buttonNum / 2) <= 0){
                for(var i=1;i<= Math.floor(this.buttonNum / 2);i++){
                    if (this.nowPage !== i) {
                        content.push("<li>"+i+"</li>");
                    } else {
                        content.push("<li class='xl-active'>"+i+"</li>");
                    }
                }
            }else{
                content.push("<li>"+1+"</li>");
                content.push("<li class='xl-disabled'>...</li>");
                for(var i=this.nowPage-Math.floor(this.buttonNum / 2)+(this.buttonNum % 2 == 0 ? 3: 2); i<=this.nowPage; i++){
                    if (this.nowPage !== i) {
                        content.push("<li>"+i+"</li>");
                    } else {
                        content.push("<li class='xl-active'>"+i+"</li>");
                    }
                }

            }
            //后半部分页码
            if(this.pageNum - this.nowPage <= 0){
                for(var i=this.nowPage+1;i<=this.pageNum;i++){
                    content.push("<li>" + i + "</li>");
                }
            }else{
                for(var i=this.nowPage+1; i<=this.nowPage+Math.floor(this.buttonNum / 2)-2; i++){
                    content.push("<li>"+i+"</li>");
                }
                content.push("<li class='xl-disabled'>...</li>");
                content.push("<li>" + this.pageNum + "</li>");
            }
        }
        content.push("<li class='xl-nextPage'>下一页</li>");
        if(this.canJump){
            content.push("<li class='xl-jumpText xl-disabled'>跳转到<input type='number' id='xlJumpNum'>页</li>");
            content.push("<li class='xl-jumpButton'>确定</li>");
        }
        content.push("</ul>");
        this.element.innerHTML = content.join('')
         // DOM重新生成后每次调用是否禁用button
         setTimeout(()=>{
            this.disabled()
            this.bindClickEvent()
         }, 20)
    }
    bindClickEvent (){
        let liList:HTMLCollection = this.element.children[0].children
        for(let i=0;i<liList.length;i++){
            liList[i].removeEventListener('click', ()=>{
                this.clickEvent(liList[i])
            })
        }
        for(let i=0;i<liList.length;i++){
            liList[i].addEventListener('click', ()=>{
                this.clickEvent(liList[i])
            })
        }
    }
    clickEvent (li:Element) {
        let cla = li.className
        var num = parseInt(li.innerHTML);
        var nowPage = this.nowPage;
        if( li.className.indexOf('xl-disabled') !== -1 || cla === 'xl-jumpText'){
            return '';
        }
        if (cla === 'xl-prevPage') {
            if (nowPage >= 1) {
                this.nowPage -= 1;
            }
        } else if (cla === 'xl-nextPage') {
            if (nowPage < this.pageNum) {
                this.nowPage += 1;
            }
        }else if(cla === 'xl-jumpButton'){
            const el = document.getElementById('xlJumpNum') as HTMLInputElement
            if(Number(el.value) > this.pageNum){
                this.nowPage = this.pageNum
            }else if(Number(el.value) <= 0){
                this.nowPage = 1
            }else{
                this.nowPage = Number(el.value)
            }
        }else{
            this.nowPage = num;
        }
        this.createHtml();
        if (this.callback) {
            this.callback(this.nowPage)
        }
    }
    disabled () {
        var nowPage = this.nowPage;
        var pageNum = this.pageNum;
        let liList:HTMLCollection = this.element.children[0].children
        if (nowPage === 1) {
            for(let i=0;i<liList.length;i++){
                if(liList[i].className.indexOf('xl-prevPage') !== -1){
                    liList[i].setAttribute('class', liList[i].getAttribute('class').concat(' xl-disabled'))
                }
            }
        } else if (nowPage === pageNum) {
            for(let i=0;i<liList.length;i++){
                if(liList[i].className.indexOf('xl-nextPage') !== -1){
                    liList[i].setAttribute('class', liList[i].getAttribute('class').concat(' xl-disabled'))
                }
            }
        }
    }
}

interface PageOptions {
    nowPage: number,
    pageNum: number,
    canJump: number,
    showOne: number,
    buttonNum: number,
    callback: Function
}