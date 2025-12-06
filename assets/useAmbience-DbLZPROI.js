import{o as f,u as d,r as n}from"./index-BAPzlSzb.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],m=f("settings-2",p),x=(s,o,u)=>{const{library:a}=d(),t=n.useRef(null),i=a.ambientSounds;return n.useEffect(()=>{const e=new Audio;return e.loop=!0,t.current=e,()=>{e.pause(),t.current=null}},[]),n.useEffect(()=>{const e=t.current;if(e)if(s!=="none"){const r=i.find(c=>c.id===s);if(r&&e.src!==r.url&&r.url&&(e.src=r.url),e.volume=Math.max(0,Math.min(1,u)),o&&(r!=null&&r.url)){const c=e.play();c!==void 0&&c.catch(l=>{console.debug("Ambience play failed:",l)})}else e.pause()}else e.pause()},[s,o,u,i]),t};export{m as S,x as u};
