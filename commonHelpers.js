(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();(()=>{const e=document.querySelector(".js-menu-container"),n=document.querySelector(".js-mobile-modal"),i=document.querySelector(".js-open-modal"),a=document.querySelector(".js-close-modal"),t=()=>{e.classList.toggle("is-open")};i.addEventListener("click",t),a.addEventListener("click",t),e.addEventListener("click",o=>{n.contains(o.target)||t()}),window.matchMedia("(min-width: 1199px)").addEventListener("change",o=>{o.matches&&e.classList.remove("is-open")})})();function l(e){return e.toString().padStart(2,0)}function y(e){const o=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),p=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:o,hours:c,minutes:p,seconds:h}}const u=new Date(2025,3,10,19,30,0,0).getTime();document.addEventListener("DOMContentLoaded",()=>{d(u)});setInterval(()=>d(u),1e3);function d(e){const n=document.querySelectorAll(".timer"),i=new Date().getTime(),a=e-i,t=y(a);n.forEach(o=>{o.querySelector("[data-days]").textContent=l(t.days),o.querySelector("[data-hours]").textContent=l(t.hours),o.querySelector("[data-minutes]").textContent=l(t.minutes),o.querySelector("[data-seconds]").textContent=l(t.seconds)})}const r=document.querySelector(".signup-form"),s={name:"",email:"",phone:""};document.addEventListener("DOMContentLoaded",()=>{m(),g()});window.addEventListener("resize",m);r.addEventListener("submit",f);function m(){const e=document.querySelector(".modal__form-container"),n=document.querySelector(".hero__form-container");window.innerWidth<768?e.appendChild(r):n.appendChild(r)}function f(e){e.preventDefault();const n=e.target;if(n.userName.value,n.userEmail.value,n.phoneNumber.value,!s.name||!s.email||!s.phone){alert("Fill please all fields");return}localStorage.removeItem("form-state"),v(),r.reset()}r.addEventListener("input",()=>{s.name=r.elements.userName.value.trim(),s.email=r.elements.userEmail.value.trim(),s.phone=r.elements.phoneNumber.value.trim(),localStorage.setItem("form-state",JSON.stringify(s))});r.addEventListener("submit",f);function g(){const e=JSON.parse(localStorage.getItem("form-state"));e&&(r.elements.userName.value=e.name,r.elements.userEmail.value=e.email,r.elements.phoneNumber.value=e.phone,s.name=e.name,s.email=e.email,s.phone=e.phone)}function v(){const e=Object.keys(s);for(const n of e)s[n]=""}
//# sourceMappingURL=commonHelpers.js.map
