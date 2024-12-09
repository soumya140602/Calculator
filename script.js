//styling cancel button
let res="";
let prev="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='=')
        {
            res= eval(res);
            document.querySelector('input').value=res;
        }
        else if(e.target.innerHTML=='AC')
        {
            prev=res;
            res="";
            document.querySelector('input').value=res;
        }
        else if(e.target.innerHTML== 'x')
        {
            res=res+'*';
            document.querySelector('input').value=res;
        }
        else if(e.target.innerHTML=='m+')
        {
            let temp=res;
            res=res+prev;
            prev=temp;
            document.querySelector('input').value=res;
        }
        else if(e.target.innerHTML=='m-')
        {
            let temp=res;
            res=res-prev;
            prev=temp;
            document.querySelector('input').value=res;
        }
        else if(e.target.innerHTML=='mr')
        {
            res=prev;
            document.querySelector('input').value=res;
        }
        else
        {
            res=res+ e.target.innerHTML;
            document.querySelector('input').value=res;
        }
    })
})

