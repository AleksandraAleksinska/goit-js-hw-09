document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();let{elements:{delay:t,step:o,amount:n}}=e.currentTarget;const l=t.value,i=o.value,s=n.value;for(let a=1;a<=s;a++){let u=a;const c=Number(l)+i*(a-1);function r(e,t){const o=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{o?n({position:e,delay:t}):l({position:e,delay:t})}),t)}))}r(u,c).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.fcb6aa9c.js.map