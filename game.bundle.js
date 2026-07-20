(()=>{var hc=0,Fo=1,uc=2;var Bo=1,dc=2,Si=3,Ui=0,Be=1,qe=2,gi=0,fn=1,oe=2,Oo=3,ko=4,fc=5,Ki=100,pc=101,mc=102,gc=103,xc=104,_c=200,yc=201,vc=202,Mc=203,_r=204,yr=205,bc=206,Sc=207,Ec=208,Tc=209,wc=210,Ac=211,Rc=212,Cc=213,Ic=214,Hr=0,Vr=1,Gr=2,pn=3,Wr=4,Xr=5,qr=6,Yr=7,zo=0,Pc=1,Lc=2,Bi=0,Zr=1,Kr=2,$r=3,ts=4,Jr=5,Qr=6,jr=7;var Ho=300,vn=301,Mn=302,ta=303,ea=304,zs=306,vr=1e3,Zi=1001,Mr=1002,oi=1003,Dc=1004;var Hs=1005;var mi=1006,ia=1007;var tn=1008;var xi=1009,Vo=1010,Go=1011,es=1012,na=1013,en=1014,Ei=1015,ci=1016,sa=1017,ra=1018,is=1020,Wo=35902,Xo=35899,qo=1021,Yo=1022,hi=1023,Vn=1026,ns=1027,Zo=1028,aa=1029,Ko=1030,oa=1031;var la=1033,Vs=33776,Gs=33777,Ws=33778,Xs=33779,ca=35840,ha=35841,ua=35842,da=35843,fa=36196,pa=37492,ma=37496,ga=37808,xa=37809,_a=37810,ya=37811,va=37812,Ma=37813,ba=37814,Sa=37815,Ea=37816,Ta=37817,wa=37818,Aa=37819,Ra=37820,Ca=37821,Ia=36492,Pa=36494,La=36495,Da=36283,Ua=36284,Na=36285,Fa=36286;var vs=2300,br=2301,xr=2302,wo=2400,Ao=2401,Ro=2402;var Uc=3200,Nc=3201;var $o=0,Fc=1,Oi="",Xe="srgb",mn="srgb-linear",Ms="linear",jt="srgb";var dn=7680;var Co=519,Bc=512,Oc=513,kc=514,Jo=515,zc=516,Hc=517,Vc=518,Gc=519,Io=35044;var Qo="300 es",pi=2e3,bs=2001;var Ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kl=1234567,_s=Math.PI/180,Gn=180/Math.PI;function ss(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[s&255]+ke[s>>8&255]+ke[s>>16&255]+ke[s>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function Xt(s,t,e){return Math.max(t,Math.min(e,s))}function jo(s,t){return(s%t+t)%t}function Nh(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function Fh(s,t,e){return s!==t?(e-s)/(t-s):0}function ys(s,t,e){return(1-e)*s+e*t}function Bh(s,t,e,i){return ys(s,t,1-Math.exp(-e*i))}function Oh(s,t=1){return t-Math.abs(jo(s,t*2)-t)}function kh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function zh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Hh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Vh(s,t){return s+Math.random()*(t-s)}function Gh(s){return s*(.5-Math.random())}function Wh(s){s!==void 0&&(kl=s);let t=kl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xh(s){return s*_s}function qh(s){return s*Gn}function Yh(s){return(s&s-1)===0&&s!==0}function Zh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Kh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $h(s,t,e,i,n){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),p=r((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*p,o*l);break;case"YXY":s.set(c*p,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function zn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function We(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ba={DEG2RAD:_s,RAD2DEG:Gn,generateUUID:ss,clamp:Xt,euclideanModulo:jo,mapLinear:Nh,inverseLerp:Fh,lerp:ys,damp:Bh,pingpong:Oh,smoothstep:kh,smootherstep:zh,randInt:Hh,randFloat:Vh,randFloatSpread:Gh,seededRandom:Wh,degToRad:Xh,radToDeg:qh,isPowerOfTwo:Yh,ceilPowerOfTwo:Zh,floorPowerOfTwo:Kh,setQuaternionFromProperEuler:$h,normalize:We,denormalize:zn},wt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let c=i[n+0],l=i[n+1],h=i[n+2],u=i[n+3],d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-o,f=c*d+l*p+h*g+u*_,v=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){let w=Math.sqrt(E),T=Math.atan2(w,f*v);m=Math.sin(m*T)/w,o=Math.sin(o*T)/w}let x=o*v;if(c=c*m+d*x,l=l*m+p*x,h=h*m+g*x,u=u*m+_*x,m===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-o*p,t[e+2]=l*g+h*p+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),u=o(r/2),d=c(i/2),p=c(n/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-n)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(r-l)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+n*l-r*c,this._y=n*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-n*o,this._w=a*h-i*o-n*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*n+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*n-o*i),h=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=n+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=n*c-r*o,this.y=r*a-i*c,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},io=new R,zl=new Qe,kt=class s{constructor(t,e,i,n,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,c,l)}set(t,e,i,n,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=n[0],m=n[3],f=n[6],v=n[1],E=n[4],x=n[7],w=n[2],T=n[5],C=n[8];return r[0]=a*_+o*v+c*w,r[3]=a*m+o*E+c*T,r[6]=a*f+o*x+c*C,r[1]=l*_+h*v+u*w,r[4]=l*m+h*E+u*T,r[7]=l*f+h*x+u*C,r[2]=d*_+p*v+g*w,r[5]=d*m+p*E+g*T,r[8]=d*f+p*x+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+n*r*l-n*a*c}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,g=e*u+i*d+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(n*l-h*i)*_,t[2]=(o*i-n*a)*_,t[3]=d*_,t[4]=(h*e-n*c)*_,t[5]=(n*r-o*e)*_,t[6]=p*_,t[7]=(i*c-l*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-n*l,n*c,-n*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(no.makeScale(t,e)),this}rotate(t){return this.premultiply(no.makeRotation(-t)),this}translate(t,e){return this.premultiply(no.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},no=new kt;function tl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ss(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wc(){let s=Ss("canvas");return s.style.display="block",s}var Hl={};function Wn(s){s in Hl||(Hl[s]=!0,console.warn(s))}function Xc(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Vl=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gl=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jh(){let s={enabled:!0,workingColorSpace:mn,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===jt&&(n.r=Di(n.r),n.g=Di(n.g),n.b=Di(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===jt&&(n.r=Hn(n.r),n.g=Hn(n.g),n.b=Hn(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Oi?Ms:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return Wn("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return Wn("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[mn]:{primaries:t,whitePoint:i,transfer:Ms,toXYZ:Vl,fromXYZ:Gl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:i,transfer:jt,toXYZ:Vl,fromXYZ:Gl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),s}var Yt=Jh();function Di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Rn,Sr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Rn===void 0&&(Rn=Ss("canvas")),Rn.width=t.width,Rn.height=t.height;let n=Rn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Rn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ss("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Di(e[i]/255)*255):e[i]=Di(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qh=0,Xn=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(so(n[a].image)):r.push(so(n[a]))}else r=so(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function so(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Sr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jh=0,ro=new R,je=class s extends Ni{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=Zi,n=Zi,r=mi,a=tn,o=hi,c=xi,l=s.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=ss(),this.name="",this.source=new Xn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ro).x}get height(){return this.source.getSize(ro).y}get depth(){return this.source.getSize(ro).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ho)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vr:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case Mr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vr:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case Mr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Ho;je.DEFAULT_ANISOTROPY=1;var se=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,x=(p+1)/2,w=(f+1)/2,T=(h+d)/4,C=(u+_)/4,P=(g+m)/4;return E>x&&E>w?E<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(E),n=T/i,r=C/i):x>w?x<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),i=T/n,r=P/n):w<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(w),i=C/r,n=P/r),this.set(i,n,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Er=class extends Ni{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);let n={width:t,height:e,depth:i.depth},r=new je(n);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:mi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Xn(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},He=class extends Er{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Es=class extends je{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=oi,this.minFilter=oi,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tr=class extends je{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=oi,this.minFilter=oi,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mi=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ui):ui.fromBufferAttribute(r,a),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Js.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Js.copy(i.boundingBox)),Js.applyMatrix4(t.matrixWorld),this.union(Js)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Qs.subVectors(this.max,fs),Cn.subVectors(t.a,fs),In.subVectors(t.b,fs),Pn.subVectors(t.c,fs),Hi.subVectors(In,Cn),Vi.subVectors(Pn,In),ln.subVectors(Cn,Pn);let e=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-ln.z,ln.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,ln.z,0,-ln.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-ln.y,ln.x,0];return!ao(e,Cn,In,Pn,Qs)||(e=[1,0,0,0,1,0,0,0,1],!ao(e,Cn,In,Pn,Qs))?!1:(js.crossVectors(Hi,Vi),e=[js.x,js.y,js.z],ao(e,Cn,In,Pn,Qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ri=[new R,new R,new R,new R,new R,new R,new R,new R],ui=new R,Js=new Mi,Cn=new R,In=new R,Pn=new R,Hi=new R,Vi=new R,ln=new R,fs=new R,Qs=new R,js=new R,cn=new R;function ao(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){cn.fromArray(s,r);let o=n.x*Math.abs(cn.x)+n.y*Math.abs(cn.y)+n.z*Math.abs(cn.z),c=t.dot(cn),l=e.dot(cn),h=i.dot(cn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var tu=new Mi,ps=new R,oo=new R,gn=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):tu.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);let e=ps.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ps,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(oo)),this.expandByPoint(ps.copy(t.center).sub(oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ci=new R,lo=new R,tr=new R,Gi=new R,co=new R,er=new R,ho=new R,$i=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){lo.copy(t).add(e).multiplyScalar(.5),tr.copy(e).sub(t).normalize(),Gi.copy(this.origin).sub(lo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(tr),o=Gi.dot(this.direction),c=-Gi.dot(tr),l=Gi.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(lo).addScaledVector(tr,d),p}intersectSphere(t,e){Ci.subVectors(t.center,this.origin);let i=Ci.dot(this.direction),n=Ci.dot(Ci)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,n=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,n=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,i,n,r){co.subVectors(e,t),er.subVectors(i,t),ho.crossVectors(co,er);let a=this.direction.dot(ho),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gi.subVectors(this.origin,t);let c=o*this.direction.dot(er.crossVectors(Gi,er));if(c<0)return null;let l=o*this.direction.dot(co.cross(Gi));if(l<0||c+l>a)return null;let h=-o*Gi.dot(ho);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},he=class s{constructor(t,e,i,n,r,a,o,c,l,h,u,d,p,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,c,l,h,u,d,p,g,_,m)}set(t,e,i,n,r,a,o,c,l,h,u,d,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=n,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/Ln.setFromMatrixColumn(t,0).length(),r=1/Ln.setFromMatrixColumn(t,1).length(),a=1/Ln.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,g=l*h,_=l*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,g=l*h,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,p=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eu,t,iu)}lookAt(t,e,i){let n=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Wi.crossVectors(i,$e),Wi.lengthSq()===0&&(Math.abs(i.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Wi.crossVectors(i,$e)),Wi.normalize(),ir.crossVectors($e,Wi),n[0]=Wi.x,n[4]=ir.x,n[8]=$e.x,n[1]=Wi.y,n[5]=ir.y,n[9]=$e.y,n[2]=Wi.z,n[6]=ir.z,n[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],v=i[3],E=i[7],x=i[11],w=i[15],T=n[0],C=n[4],P=n[8],S=n[12],b=n[1],L=n[5],F=n[9],H=n[13],G=n[2],Y=n[6],W=n[10],$=n[14],V=n[3],rt=n[7],ht=n[11],St=n[15];return r[0]=a*T+o*b+c*G+l*V,r[4]=a*C+o*L+c*Y+l*rt,r[8]=a*P+o*F+c*W+l*ht,r[12]=a*S+o*H+c*$+l*St,r[1]=h*T+u*b+d*G+p*V,r[5]=h*C+u*L+d*Y+p*rt,r[9]=h*P+u*F+d*W+p*ht,r[13]=h*S+u*H+d*$+p*St,r[2]=g*T+_*b+m*G+f*V,r[6]=g*C+_*L+m*Y+f*rt,r[10]=g*P+_*F+m*W+f*ht,r[14]=g*S+_*H+m*$+f*St,r[3]=v*T+E*b+x*G+w*V,r[7]=v*C+E*L+x*Y+w*rt,r[11]=v*P+E*F+x*W+w*ht,r[15]=v*S+E*H+x*$+w*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*u-n*l*u-r*o*d+i*l*d+n*o*p-i*c*p)+_*(+e*c*p-e*l*d+r*a*d-n*a*p+n*l*h-r*c*h)+m*(+e*l*u-e*o*p-r*a*u+i*a*p+r*o*h-i*l*h)+f*(-n*o*h-e*c*u+e*o*d+n*a*u-i*a*d+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],v=u*m*l-_*d*l+_*c*p-o*m*p-u*c*f+o*d*f,E=g*d*l-h*m*l-g*c*p+a*m*p+h*c*f-a*d*f,x=h*_*l-g*u*l+g*o*p-a*_*p-h*o*f+a*u*f,w=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,T=e*v+i*E+n*x+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return t[0]=v*C,t[1]=(_*d*r-u*m*r-_*n*p+i*m*p+u*n*f-i*d*f)*C,t[2]=(o*m*r-_*c*r+_*n*l-i*m*l-o*n*f+i*c*f)*C,t[3]=(u*c*r-o*d*r-u*n*l+i*d*l+o*n*p-i*c*p)*C,t[4]=E*C,t[5]=(h*m*r-g*d*r+g*n*p-e*m*p-h*n*f+e*d*f)*C,t[6]=(g*c*r-a*m*r-g*n*l+e*m*l+a*n*f-e*c*f)*C,t[7]=(a*d*r-h*c*r+h*n*l-e*d*l-a*n*p+e*c*p)*C,t[8]=x*C,t[9]=(g*u*r-h*_*r-g*i*p+e*_*p+h*i*f-e*u*f)*C,t[10]=(a*_*r-g*o*r+g*i*l-e*_*l-a*i*f+e*o*f)*C,t[11]=(h*o*r-a*u*r-h*i*l+e*u*l+a*i*p-e*o*p)*C,t[12]=w*C,t[13]=(h*_*n-g*u*n+g*i*d-e*_*d-h*i*m+e*u*m)*C,t[14]=(g*o*n-a*_*n-g*i*c+e*_*c+a*i*m-e*o*m)*C,t[15]=(a*u*n-h*o*n+h*i*c-e*u*c-a*i*d+e*o*d)*C,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*a,0,l*c-n*o,h*c+n*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,g=r*u,_=a*h,m=a*u,f=o*u,v=c*l,E=c*h,x=c*u,w=i.x,T=i.y,C=i.z;return n[0]=(1-(_+f))*w,n[1]=(p+x)*w,n[2]=(g-E)*w,n[3]=0,n[4]=(p-x)*T,n[5]=(1-(d+f))*T,n[6]=(m+v)*T,n[7]=0,n[8]=(g+E)*C,n[9]=(m-v)*C,n[10]=(1-(d+_))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=Ln.set(n[0],n[1],n[2]).length(),a=Ln.set(n[4],n[5],n[6]).length(),o=Ln.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],di.copy(this);let l=1/r,h=1/a,u=1/o;return di.elements[0]*=l,di.elements[1]*=l,di.elements[2]*=l,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=u,di.elements[9]*=u,di.elements[10]*=u,e.setFromRotationMatrix(di),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=pi,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(i-n),d=(e+t)/(e-t),p=(i+n)/(i-n),g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===pi)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===bs)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=pi,c=!1){let l=this.elements,h=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),p=-(i+n)/(i-n),g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===pi)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===bs)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ln=new R,di=new he,eu=new R(0,0,0),iu=new R(1,1,1),Wi=new R,ir=new R,$e=new R,Wl=new he,Xl=new Qe,ti=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],c=n[1],l=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var qn=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nu=0,ql=new R,Dn=new Qe,Ii=new he,nr=new R,ms=new R,su=new R,ru=new Qe,Yl=new R(1,0,0),Zl=new R(0,1,0),Kl=new R(0,0,1),$l={type:"added"},au={type:"removed"},Un={type:"childadded",child:null},uo={type:"childremoved",child:null},fe=class s extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new R,e=new ti,i=new Qe,n=new R(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new he},normalMatrix:{value:new kt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Dn.setFromAxisAngle(t,e),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(t,e){return Dn.setFromAxisAngle(t,e),this.quaternion.premultiply(Dn),this}rotateX(t){return this.rotateOnAxis(Yl,t)}rotateY(t){return this.rotateOnAxis(Zl,t)}rotateZ(t){return this.rotateOnAxis(Kl,t)}translateOnAxis(t,e){return ql.copy(t).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yl,t)}translateY(t){return this.translateOnAxis(Zl,t)}translateZ(t){return this.translateOnAxis(Kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?nr.copy(t):nr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(ms,nr,this.up):Ii.lookAt(nr,ms,this.up),this.quaternion.setFromRotationMatrix(Ii),n&&(Ii.extractRotation(n.matrixWorld),Dn.setFromRotationMatrix(Ii),this.quaternion.premultiply(Dn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($l),Un.child=t,this.dispatchEvent(Un),Un.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(au),uo.child=t,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($l),Un.child=t,this.dispatchEvent(Un),Un.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,su),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,ru,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};fe.DEFAULT_UP=new R(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new R,Pi=new R,fo=new R,Li=new R,Nn=new R,Fn=new R,Jl=new R,po=new R,mo=new R,go=new R,xo=new se,_o=new se,yo=new se,Yi=class s{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),fi.subVectors(t,e),n.cross(fi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){fi.subVectors(n,e),Pi.subVectors(i,e),fo.subVectors(t,e);let a=fi.dot(fi),o=fi.dot(Pi),c=fi.dot(fo),l=Pi.dot(Pi),h=Pi.dot(fo),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,i,n,r,a,o,c){return this.getBarycoord(t,e,i,n,Li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Li.x),c.addScaledVector(a,Li.y),c.addScaledVector(o,Li.z),c)}static getInterpolatedAttribute(t,e,i,n,r,a){return xo.setScalar(0),_o.setScalar(0),yo.setScalar(0),xo.fromBufferAttribute(t,e),_o.fromBufferAttribute(t,i),yo.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(xo,r.x),a.addScaledVector(_o,r.y),a.addScaledVector(yo,r.z),a}static isFrontFacing(t,e,i,n){return fi.subVectors(i,e),Pi.subVectors(t,e),fi.cross(Pi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),fi.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;Nn.subVectors(n,i),Fn.subVectors(r,i),po.subVectors(t,i);let c=Nn.dot(po),l=Fn.dot(po);if(c<=0&&l<=0)return e.copy(i);mo.subVectors(t,n);let h=Nn.dot(mo),u=Fn.dot(mo);if(h>=0&&u<=h)return e.copy(n);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(Nn,a);go.subVectors(t,r);let p=Nn.dot(go),g=Fn.dot(go);if(g>=0&&p<=g)return e.copy(r);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(Fn,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Jl.subVectors(r,n),o=(u-h)/(u-h+(p-g)),e.copy(n).addScaledVector(Jl,o);let f=1/(m+_+d);return a=_*f,o=d*f,e.copy(i).addScaledVector(Nn,a).addScaledVector(Fn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},sr={h:0,s:0,l:0};function vo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Rt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Yt.workingColorSpace){if(t=jo(t,1),e=Xt(e,0,1),i=Xt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=vo(a,r,t+1/3),this.g=vo(a,r,t),this.b=vo(a,r,t-1/3)}return Yt.colorSpaceToWorking(this,n),this}setStyle(t,e=Xe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let i=qc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return Yt.workingToColorSpace(ze.copy(this),t),Math.round(Xt(ze.r*255,0,255))*65536+Math.round(Xt(ze.g*255,0,255))*256+Math.round(Xt(ze.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(ze.copy(this),e);let i=ze.r,n=ze.g,r=ze.b,a=Math.max(i,n,r),o=Math.min(i,n,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(n-r)/u+(n<r?6:0);break;case n:c=(r-i)/u+2;break;case r:c=(i-n)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Xe){Yt.workingToColorSpace(ze.copy(this),t);let e=ze.r,i=ze.g,n=ze.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(sr);let i=ys(Xi.h,sr.h,e),n=ys(Xi.s,sr.s,e),r=ys(Xi.l,sr.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new Rt;Rt.NAMES=qc;var ou=0,Fi=class extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=fn,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_r,this.blendDst=yr,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=pn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Co,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dn,this.stencilZFail=dn,this.stencilZPass=dn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fn&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_r&&(i.blendSrc=this.blendSrc),this.blendDst!==yr&&(i.blendDst=this.blendDst),this.blendEquation!==Ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Co&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==dn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==dn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Qt=class extends Fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ae=new R,rr=new wt,lu=0,Re=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Io,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)rr.fromBufferAttribute(this,e),rr.applyMatrix3(t),this.setXY(e,rr.x,rr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),i=We(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),i=We(i,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),i=We(i,this.array),n=We(n,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Io&&(t.usage=this.usage),t}};var Ts=class extends Re{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ws=class extends Re{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var te=class extends Re{constructor(t,e,i){super(new Float32Array(t),e,i)}},cu=0,ai=new he,Mo=new fe,Bn=new R,Je=new Mi,gs=new Mi,Ue=new R,Me=class s extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tl(t)?ws:Ts)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ai.makeRotationFromQuaternion(t),this.applyMatrix4(ai),this}rotateX(t){return ai.makeRotationX(t),this.applyMatrix4(ai),this}rotateY(t){return ai.makeRotationY(t),this.applyMatrix4(ai),this}rotateZ(t){return ai.makeRotationZ(t),this.applyMatrix4(ai),this}translate(t,e,i){return ai.makeTranslation(t,e,i),this.applyMatrix4(ai),this}scale(t,e,i){return ai.makeScale(t,e,i),this.applyMatrix4(ai),this}lookAt(t){return Mo.lookAt(t),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bn).negate(),this.translate(Bn.x,Bn.y,Bn.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new te(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(Je.min,gs.min),Je.expandByPoint(Ue),Ue.addVectors(Je.max,gs.max),Je.expandByPoint(Ue)):(Je.expandByPoint(gs.min),Je.expandByPoint(gs.max))}Je.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Ue.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ue));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ue.fromBufferAttribute(o,l),c&&(Bn.fromBufferAttribute(t,l),Ue.add(Bn)),n=Math.max(n,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new R,c[P]=new R;let l=new R,h=new R,u=new R,d=new wt,p=new wt,g=new wt,_=new R,m=new R;function f(P,S,b){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,b),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),h.sub(l),u.sub(l),p.sub(d),g.sub(d);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[P].add(_),o[S].add(_),o[b].add(_),c[P].add(m),c[S].add(m),c[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,S=v.length;P<S;++P){let b=v[P],L=b.start,F=b.count;for(let H=L,G=L+F;H<G;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let E=new R,x=new R,w=new R,T=new R;function C(P){w.fromBufferAttribute(n,P),T.copy(w);let S=o[P];E.copy(S),E.sub(w.multiplyScalar(w.dot(S))).normalize(),x.crossVectors(T,S);let L=x.dot(c[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,L)}for(let P=0,S=v.length;P<S;++P){let b=v[P],L=b.start,F=b.count;for(let H=L,G=L+F;H<G;H+=3)C(t.getX(H+0)),C(t.getX(H+1)),C(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let n=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Re(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let c=n[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,i);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let n={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(n[c]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let l in n){let h=n[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ql=new he,hn=new $i,ar=new gn,jl=new R,or=new R,lr=new R,cr=new R,bo=new R,hr=new R,tc=new R,ur=new R,xe=class extends fe{constructor(t=new Me,e=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(bo.fromBufferAttribute(u,t),a?hr.addScaledVector(bo,h):hr.addScaledVector(bo.sub(e),h))}e.add(hr)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere),ar.applyMatrix4(r),hn.copy(t.ray).recast(t.near),!(ar.containsPoint(hn.origin)===!1&&(hn.intersectSphere(ar,jl)===null||hn.origin.distanceToSquared(jl)>(t.far-t.near)**2))&&(Ql.copy(r).invert(),hn.copy(t.ray).applyMatrix4(Ql),!(i.boundingBox!==null&&hn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,hn)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,w=E;x<w;x+=3){let T=o.getX(x),C=o.getX(x+1),P=o.getX(x+2);n=dr(this,f,t,i,l,h,u,T,C,P),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let v=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);n=dr(this,a,t,i,l,h,u,v,E,x),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,w=E;x<w;x+=3){let T=x,C=x+1,P=x+2;n=dr(this,f,t,i,l,h,u,T,C,P),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let v=m,E=m+1,x=m+2;n=dr(this,a,t,i,l,h,u,v,E,x),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function hu(s,t,e,i,n,r,a,o){let c;if(t.side===Be?c=i.intersectTriangle(a,r,n,!0,o):c=i.intersectTriangle(n,r,a,t.side===Ui,o),c===null)return null;ur.copy(o),ur.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(ur);return l<e.near||l>e.far?null:{distance:l,point:ur.clone(),object:s}}function dr(s,t,e,i,n,r,a,o,c,l){s.getVertexPosition(o,or),s.getVertexPosition(c,lr),s.getVertexPosition(l,cr);let h=hu(s,t,e,i,or,lr,cr,tc);if(h){let u=new R;Yi.getBarycoord(tc,or,lr,cr,u),n&&(h.uv=Yi.getInterpolatedAttribute(n,o,c,l,u,new wt)),r&&(h.uv1=Yi.getInterpolatedAttribute(r,o,c,l,u,new wt)),a&&(h.normal=Yi.getInterpolatedAttribute(a,o,c,l,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new R,materialIndex:0};Yi.getNormal(or,lr,cr,d.normal),h.face=d,h.barycoord=u}return h}var ne=class s extends Me{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function g(_,m,f,v,E,x,w,T,C,P,S){let b=x/C,L=w/P,F=x/2,H=w/2,G=T/2,Y=C+1,W=P+1,$=0,V=0,rt=new R;for(let ht=0;ht<W;ht++){let St=ht*L-H;for(let Wt=0;Wt<Y;Wt++){let le=Wt*b-F;rt[_]=le*v,rt[m]=St*E,rt[f]=G,l.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[f]=T>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Wt/C),u.push(1-ht/P),$+=1}}for(let ht=0;ht<P;ht++)for(let St=0;St<C;St++){let Wt=d+St+Y*ht,le=d+St+Y*(ht+1),pe=d+(St+1)+Y*(ht+1),ee=d+(St+1)+Y*ht;c.push(Wt,le,ee),c.push(le,pe,ee),V+=6}o.addGroup(p,V,S),p+=V,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function bn(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ve(s){let t={};for(let e=0;e<s.length;e++){let i=bn(s[e]);for(let n in i)t[n]=i[n]}return t}function uu(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function el(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var ki={clone:bn,merge:Ve},du=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,be=class extends Fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=du,this.fragmentShader=fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bn(t.uniforms),this.uniformsGroups=uu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},As=class extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qi=new R,ec=new wt,ic=new wt,Fe=class extends As{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Gn*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gn*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,ec,ic),e.subVectors(ic,ec)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_s*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*n/c,e-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},On=-90,kn=1,wr=class extends fe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Fe(On,kn,t,e);n.layers=this.layers,this.add(n);let r=new Fe(On,kn,t,e);r.layers=this.layers,this.add(r);let a=new Fe(On,kn,t,e);a.layers=this.layers,this.add(a);let o=new Fe(On,kn,t,e);o.layers=this.layers,this.add(o);let c=new Fe(On,kn,t,e);c.layers=this.layers,this.add(c);let l=new Fe(On,kn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===pi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===bs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Rs=class extends je{constructor(t=[],e=vn,i,n,r,a,o,c,l,h){super(t,e,i,n,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ar=class extends He{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Rs(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new ne(5,5,5),r=new be({name:"CubemapFromEquirect",uniforms:bn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Be,blending:gi});r.uniforms.tEquirect.value=e;let a=new xe(n,r),o=e.minFilter;return e.minFilter===tn&&(e.minFilter=mi),new wr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}},Ht=class extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},pu={type:"move"},Yn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pu)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ht;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Cs=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Is=class extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var So=new R,mu=new R,gu=new kt,vi=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=So.subVectors(i,e).cross(mu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(So),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||gu.getNormalMatrix(t),n=this.coplanarPoint(So).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},un=new gn,xu=new wt(.5,.5),fr=new R,Zn=class{constructor(t=new vi,e=new vi,i=new vi,n=new vi,r=new vi,a=new vi){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=pi,i=!1){let n=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],v=r[12],E=r[13],x=r[14],w=r[15];if(n[0].setComponents(l-a,p-h,f-g,w-v).normalize(),n[1].setComponents(l+a,p+h,f+g,w+v).normalize(),n[2].setComponents(l+o,p+u,f+_,w+E).normalize(),n[3].setComponents(l-o,p-u,f-_,w-E).normalize(),i)n[4].setComponents(c,d,m,x).normalize(),n[5].setComponents(l-c,p-d,f-m,w-x).normalize();else if(n[4].setComponents(l-c,p-d,f-m,w-x).normalize(),e===pi)n[5].setComponents(l+c,p+d,f+m,w+x).normalize();else if(e===bs)n[5].setComponents(c,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(un)}intersectsSprite(t){un.center.set(0,0,0);let e=xu.distanceTo(t.center);return un.radius=.7071067811865476+e,un.applyMatrix4(t.matrixWorld),this.intersectsSphere(un)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(fr.x=n.normal.x>0?t.max.x:t.min.x,fr.y=n.normal.y>0?t.max.y:t.min.y,fr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xn=class extends Fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},nc=new he,Po=new $i,pr=new gn,mr=new R,Kn=class extends fe{constructor(t=new Me,e=new xn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere),pr.applyMatrix4(n),pr.radius+=r,t.ray.intersectsSphere(pr)===!1)return;nc.copy(n).invert(),Po.copy(t.ray).applyMatrix4(nc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,_=p;g<_;g++){let m=l.getX(g);mr.fromBufferAttribute(u,m),sc(mr,m,c,n,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,_=p;g<_;g++)mr.fromBufferAttribute(u,g),sc(mr,g,c,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function sc(s,t,e,i,n,r,a){let o=Po.distanceSqToPoint(s);if(o<e){let c=new R;Po.closestPointToPoint(s,c),c.applyMatrix4(i);let l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ps=class extends je{constructor(t,e,i=en,n,r,a,o=oi,c=oi,l,h=Vn,u=1){if(h!==Vn&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,n,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ls=class extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Ds=class s extends Me{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new R,h=new wt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=i+u/e*n;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},$t=class s extends Me{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,_=[],m=i/2,f=0;v(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(p,2));function v(){let x=new R,w=new R,T=0,C=(e-t)/i;for(let P=0;P<=r;P++){let S=[],b=P/r,L=b*(e-t)+t;for(let F=0;F<=n;F++){let H=F/n,G=H*c+o,Y=Math.sin(G),W=Math.cos(G);w.x=L*Y,w.y=-b*i+m,w.z=L*W,u.push(w.x,w.y,w.z),x.set(Y,C,W).normalize(),d.push(x.x,x.y,x.z),p.push(H,1-b),S.push(g++)}_.push(S)}for(let P=0;P<n;P++)for(let S=0;S<r;S++){let b=_[S][P],L=_[S+1][P],F=_[S+1][P+1],H=_[S][P+1];(t>0||S!==0)&&(h.push(b,L,H),T+=3),(e>0||S!==r-1)&&(h.push(L,F,H),T+=3)}l.addGroup(f,T,0),f+=T}function E(x){let w=g,T=new wt,C=new R,P=0,S=x===!0?t:e,b=x===!0?1:-1;for(let F=1;F<=n;F++)u.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),g++;let L=g;for(let F=0;F<=n;F++){let G=F/n*c+o,Y=Math.cos(G),W=Math.sin(G);C.x=S*W,C.y=m*b,C.z=S*Y,u.push(C.x,C.y,C.z),d.push(0,b,0),T.x=Y*.5+.5,T.y=W*.5*b+.5,p.push(T.x,T.y),g++}for(let F=0;F<n;F++){let H=w+F,G=L+F;x===!0?h.push(G,G+1,H):h.push(G+1,G,H),P+=3}l.addGroup(f,P,x===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Se=class s extends $t{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Us=class s extends Me{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],a=[];o(n),l(i),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let E=new R,x=new R,w=new R;for(let T=0;T<e.length;T+=3)p(e[T+0],E),p(e[T+1],x),p(e[T+2],w),c(E,x,w,v)}function c(v,E,x,w){let T=w+1,C=[];for(let P=0;P<=T;P++){C[P]=[];let S=v.clone().lerp(x,P/T),b=E.clone().lerp(x,P/T),L=T-P;for(let F=0;F<=L;F++)F===0&&P===T?C[P][F]=S:C[P][F]=S.clone().lerp(b,F/L)}for(let P=0;P<T;P++)for(let S=0;S<2*(T-P)-1;S++){let b=Math.floor(S/2);S%2===0?(d(C[P][b+1]),d(C[P+1][b]),d(C[P][b])):(d(C[P][b+1]),d(C[P+1][b+1]),d(C[P+1][b]))}}function l(v){let E=new R;for(let x=0;x<r.length;x+=3)E.x=r[x+0],E.y=r[x+1],E.z=r[x+2],E.normalize().multiplyScalar(v),r[x+0]=E.x,r[x+1]=E.y,r[x+2]=E.z}function h(){let v=new R;for(let E=0;E<r.length;E+=3){v.x=r[E+0],v.y=r[E+1],v.z=r[E+2];let x=m(v)/2/Math.PI+.5,w=f(v)/Math.PI+.5;a.push(x,1-w)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){let E=a[v+0],x=a[v+2],w=a[v+4],T=Math.max(E,x,w),C=Math.min(E,x,w);T>.9&&C<.1&&(E<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,E){let x=v*3;E.x=t[x+0],E.y=t[x+1],E.z=t[x+2]}function g(){let v=new R,E=new R,x=new R,w=new R,T=new wt,C=new wt,P=new wt;for(let S=0,b=0;S<r.length;S+=9,b+=6){v.set(r[S+0],r[S+1],r[S+2]),E.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),T.set(a[b+0],a[b+1]),C.set(a[b+2],a[b+3]),P.set(a[b+4],a[b+5]),w.copy(v).add(E).add(x).divideScalar(3);let L=m(w);_(T,b+0,v,L),_(C,b+2,E,L),_(P,b+4,x,L)}}function _(v,E,x,w){w<0&&v.x===1&&(a[E]=v.x-1),x.x===0&&x.z===0&&(a[E]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}},Ce=class s extends Us{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var bi=class s extends Us{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Ji=class s extends Me{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,u=t/o,d=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let v=f*d-a;for(let E=0;E<l;E++){let x=E*u-r;g.push(x,-v,0),_.push(0,0,1),m.push(E/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<o;v++){let E=v+l*f,x=v+l*(f+1),w=v+1+l*(f+1),T=v+1+l*f;p.push(E,x,T),p.push(x,w,T)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ne=class s extends Me{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new R,d=new R,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){let v=[],E=f/i,x=0;f===0&&a===0?x=.5/e:f===i&&c===Math.PI&&(x=-.5/e);for(let w=0;w<=e;w++){let T=w/e;u.x=-t*Math.cos(n+T*r)*Math.sin(a+E*o),u.y=t*Math.cos(a+E*o),u.z=t*Math.sin(n+T*r)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+x,1-E),v.push(l++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<e;v++){let E=h[f][v+1],x=h[f][v],w=h[f+1][v],T=h[f+1][v+1];(f!==0||a>0)&&p.push(E,x,T),(f!==i-1||c<Math.PI)&&p.push(x,w,T)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ie=class s extends Me{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],c=[],l=[],h=new R,u=new R,d=new R;for(let p=0;p<=i;p++)for(let g=0;g<=n;g++){let _=g/n*r,m=p/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/n),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=n;g++){let _=(n+1)*p+g-1,m=(n+1)*(p-1)+g-1,f=(n+1)*(p-1)+g,v=(n+1)*p+g;a.push(_,m,v),a.push(m,f,v)}this.setIndex(a),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ns=class extends be{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$n=class extends Fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$o,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Jn=class extends $n{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Rr=class extends Fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Cr=class extends Fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function gr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function _u(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var _n=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ir=class extends _n{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wo,endingEnd:wo}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ao:r=t,o=2*e-i;break;case Ro:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ao:a=t,c=2*i-e;break;case Ro:a=1,c=i+n[1]-n[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-e)/(n-e),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,E=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let w=0;w!==o;++w)r[w]=f*a[h+w]+v*a[l+w]+E*a[c+w]+x*a[u+w];return r}},Pr=class extends _n{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Lr=class extends _n{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},ei=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gr(e,this.TimeBufferType),this.values=gr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:gr(t.times,Array),values:gr(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Lr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Pr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ir(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case vs:e=this.InterpolantFactoryMethodDiscrete;break;case br:e=this.InterpolantFactoryMethodLinear;break;case xr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vs;case this.InterpolantFactoryMethodLinear:return br;case this.InterpolantFactoryMethodSmooth:return xr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(n!==void 0&&_u(n))for(let o=0,c=n.length;o!==c;++o){let l=n[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===xr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(n)c=!0;else{let u=o*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[p+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let p=0;p!==i;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=br;var Qi=class extends ei{constructor(t,e,i){super(t,e,i)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=vs;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Dr=class extends ei{constructor(t,e,i,n){super(t,e,i,n)}};Dr.prototype.ValueTypeName="color";var Ur=class extends ei{constructor(t,e,i,n){super(t,e,i,n)}};Ur.prototype.ValueTypeName="number";var Nr=class extends _n{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(n-e),l=t*o;for(let h=l+o;l!==h;l+=4)Qe.slerpFlat(r,0,a,l-o,a,l,c);return r}},Fs=class extends ei{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Nr(this.times,this.values,this.getValueSize(),t)}};Fs.prototype.ValueTypeName="quaternion";Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends ei{constructor(t,e,i){super(t,e,i)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=vs;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Fr=class extends ei{constructor(t,e,i,n){super(t,e,i,n)}};Fr.prototype.ValueTypeName="vector";var Br=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Yc=new Br,Or=class{constructor(t){this.manager=t!==void 0?t:Yc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Or.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qn=class extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Bs=class extends Qn{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Eo=new he,rc=new R,ac=new R,kr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zn,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;rc.setFromMatrixPosition(t.matrixWorld),e.position.copy(rc),ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ac),e.updateMatrixWorld(),Eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var oc=new he,xs=new R,To=new R,Lo=class extends kr{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),xs.setFromMatrixPosition(t.matrixWorld),i.position.copy(xs),To.copy(i.position),To.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(To),i.updateMatrixWorld(),n.makeTranslation(-xs.x,-xs.y,-xs.z),oc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc,i.coordinateSystem,i.reversedDepth)}},li=class extends Qn{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Lo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},yn=class extends As{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,c=n-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Do=class extends kr{constructor(){super(new yn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jn=class extends Qn{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new Do}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var zr=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Os=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var il="\\[\\]\\.:\\/",yu=new RegExp("["+il+"]","g"),nl="[^"+il+"]",vu="[^"+il.replace("\\.","")+"]",Mu=/((?:WC+[\/:])*)/.source.replace("WC",nl),bu=/(WCOD+)?/.source.replace("WCOD",vu),Su=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nl),Eu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nl),Tu=new RegExp("^"+Mu+bu+Su+Eu+"$"),wu=["material","materials","bones","map"],Uo=class{constructor(t,e,i){let n=i||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},de=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yu,"")}static parseTrackName(t){let e=Tu.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);wu.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[n];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=Uo;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yg=new Float32Array(1);var lc=new he,ks=class{constructor(t,e,i=0,n=1/0){this.ray=new $i(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new qn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return lc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lc),this}intersectObject(t,e=!0,i=[]){return No(t,this,i,e),i.sort(cc),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)No(t[n],this,i,e);return i.sort(cc),i}};function cc(s,t){return s.distance-t.distance}function No(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)No(r[a],t,e,!0)}}function sl(s,t,e,i){let n=Au(i);switch(e){case qo:return s*t;case Zo:return s*t/n.components*n.byteLength;case aa:return s*t/n.components*n.byteLength;case Ko:return s*t*2/n.components*n.byteLength;case oa:return s*t*2/n.components*n.byteLength;case Yo:return s*t*3/n.components*n.byteLength;case hi:return s*t*4/n.components*n.byteLength;case la:return s*t*4/n.components*n.byteLength;case Vs:case Gs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ws:case Xs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ha:case da:return Math.max(s,16)*Math.max(t,8)/4;case ca:case ua:return Math.max(s,8)*Math.max(t,8)/2;case fa:case pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case _a:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ya:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case va:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ba:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case wa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ia:case Pa:case La:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Da:case Ua:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Na:case Fa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Au(s){switch(s){case xi:case Vo:return{byteLength:1,components:1};case es:case Go:case ci:return{byteLength:2,components:1};case sa:case ra:return{byteLength:2,components:4};case en:case na:case Ei:return{byteLength:4,components:1};case Wo:case Xo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function xh(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Nu(s){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:n,remove:r,update:a}}var Fu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ou=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ku=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ku=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$u=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ad=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,od=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",fd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ed=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Td=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ad=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Id=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ud=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Od=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,df=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_f=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,If=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ep=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,np=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,op=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:Fu,alphahash_pars_fragment:Bu,alphamap_fragment:Ou,alphamap_pars_fragment:ku,alphatest_fragment:zu,alphatest_pars_fragment:Hu,aomap_fragment:Vu,aomap_pars_fragment:Gu,batching_pars_vertex:Wu,batching_vertex:Xu,begin_vertex:qu,beginnormal_vertex:Yu,bsdfs:Zu,iridescence_fragment:Ku,bumpmap_pars_fragment:$u,clipping_planes_fragment:Ju,clipping_planes_pars_fragment:Qu,clipping_planes_pars_vertex:ju,clipping_planes_vertex:td,color_fragment:ed,color_pars_fragment:id,color_pars_vertex:nd,color_vertex:sd,common:rd,cube_uv_reflection_fragment:ad,defaultnormal_vertex:od,displacementmap_pars_vertex:ld,displacementmap_vertex:cd,emissivemap_fragment:hd,emissivemap_pars_fragment:ud,colorspace_fragment:dd,colorspace_pars_fragment:fd,envmap_fragment:pd,envmap_common_pars_fragment:md,envmap_pars_fragment:gd,envmap_pars_vertex:xd,envmap_physical_pars_fragment:Rd,envmap_vertex:_d,fog_vertex:yd,fog_pars_vertex:vd,fog_fragment:Md,fog_pars_fragment:bd,gradientmap_pars_fragment:Sd,lightmap_pars_fragment:Ed,lights_lambert_fragment:Td,lights_lambert_pars_fragment:wd,lights_pars_begin:Ad,lights_toon_fragment:Cd,lights_toon_pars_fragment:Id,lights_phong_fragment:Pd,lights_phong_pars_fragment:Ld,lights_physical_fragment:Dd,lights_physical_pars_fragment:Ud,lights_fragment_begin:Nd,lights_fragment_maps:Fd,lights_fragment_end:Bd,logdepthbuf_fragment:Od,logdepthbuf_pars_fragment:kd,logdepthbuf_pars_vertex:zd,logdepthbuf_vertex:Hd,map_fragment:Vd,map_pars_fragment:Gd,map_particle_fragment:Wd,map_particle_pars_fragment:Xd,metalnessmap_fragment:qd,metalnessmap_pars_fragment:Yd,morphinstance_vertex:Zd,morphcolor_vertex:Kd,morphnormal_vertex:$d,morphtarget_pars_vertex:Jd,morphtarget_vertex:Qd,normal_fragment_begin:jd,normal_fragment_maps:tf,normal_pars_fragment:ef,normal_pars_vertex:nf,normal_vertex:sf,normalmap_pars_fragment:rf,clearcoat_normal_fragment_begin:af,clearcoat_normal_fragment_maps:of,clearcoat_pars_fragment:lf,iridescence_pars_fragment:cf,opaque_fragment:hf,packing:uf,premultiplied_alpha_fragment:df,project_vertex:ff,dithering_fragment:pf,dithering_pars_fragment:mf,roughnessmap_fragment:gf,roughnessmap_pars_fragment:xf,shadowmap_pars_fragment:_f,shadowmap_pars_vertex:yf,shadowmap_vertex:vf,shadowmask_pars_fragment:Mf,skinbase_vertex:bf,skinning_pars_vertex:Sf,skinning_vertex:Ef,skinnormal_vertex:Tf,specularmap_fragment:wf,specularmap_pars_fragment:Af,tonemapping_fragment:Rf,tonemapping_pars_fragment:Cf,transmission_fragment:If,transmission_pars_fragment:Pf,uv_pars_fragment:Lf,uv_pars_vertex:Df,uv_vertex:Uf,worldpos_vertex:Nf,background_vert:Ff,background_frag:Bf,backgroundCube_vert:Of,backgroundCube_frag:kf,cube_vert:zf,cube_frag:Hf,depth_vert:Vf,depth_frag:Gf,distanceRGBA_vert:Wf,distanceRGBA_frag:Xf,equirect_vert:qf,equirect_frag:Yf,linedashed_vert:Zf,linedashed_frag:Kf,meshbasic_vert:$f,meshbasic_frag:Jf,meshlambert_vert:Qf,meshlambert_frag:jf,meshmatcap_vert:tp,meshmatcap_frag:ep,meshnormal_vert:ip,meshnormal_frag:np,meshphong_vert:sp,meshphong_frag:rp,meshphysical_vert:ap,meshphysical_frag:op,meshtoon_vert:lp,meshtoon_frag:cp,points_vert:hp,points_frag:up,shadow_vert:dp,shadow_frag:fp,sprite_vert:pp,sprite_frag:mp},at={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Ti={basic:{uniforms:Ve([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ve([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ve([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ve([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ve([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ve([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ve([at.points,at.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ve([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ve([at.common,at.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ve([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ve([at.sprite,at.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ve([at.common,at.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ve([at.lights,at.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Ti.physical={uniforms:Ve([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var Oa={r:0,b:0,g:0},Sn=new ti,gp=new he;function xp(s,t,e,i,n,r,a){let o=new Rt(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function _(E){let x=!1,w=g(E);w===null?f(o,c):w&&w.isColor&&(f(w,1),x=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,x){let w=g(x);w&&(w.isCubeTexture||w.mapping===zs)?(h===void 0&&(h=new xe(new ne(1,1,1),new be({name:"BackgroundCubeMaterial",uniforms:bn(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Sn.copy(x.backgroundRotation),Sn.x*=-1,Sn.y*=-1,Sn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Sn.y*=-1,Sn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gp.makeRotationFromEuler(Sn)),h.material.toneMapped=Yt.getTransfer(w.colorSpace)!==jt,(u!==w||d!==w.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,p=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new xe(new Ji(2,2),new be({name:"BackgroundMaterial",uniforms:bn(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(w.colorSpace)!==jt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=w,d=w.version,p=s.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,x){E.getRGB(Oa,el(s)),i.buffers.color.setClear(Oa.r,Oa.g,Oa.b,x,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),c=x,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(o,c)},render:_,addToRenderList:m,dispose:v}}function _p(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,a=!1;function o(b,L,F,H,G){let Y=!1,W=u(H,F,L);r!==W&&(r=W,l(r.object)),Y=p(b,H,F,G),Y&&g(b,H,F,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(b,L,F,H),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return s.createVertexArray()}function l(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,L,F){let H=F.wireframe===!0,G=i[b.id];G===void 0&&(G={},i[b.id]=G);let Y=G[L.id];Y===void 0&&(Y={},G[L.id]=Y);let W=Y[H];return W===void 0&&(W=d(c()),Y[H]=W),W}function d(b){let L=[],F=[],H=[];for(let G=0;G<e;G++)L[G]=0,F[G]=0,H[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:H,object:b,attributes:{},index:null}}function p(b,L,F,H){let G=r.attributes,Y=L.attributes,W=0,$=F.getAttributes();for(let V in $)if($[V].location>=0){let ht=G[V],St=Y[V];if(St===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(St=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(St=b.instanceColor)),ht===void 0||ht.attribute!==St||St&&ht.data!==St.data)return!0;W++}return r.attributesNum!==W||r.index!==H}function g(b,L,F,H){let G={},Y=L.attributes,W=0,$=F.getAttributes();for(let V in $)if($[V].location>=0){let ht=Y[V];ht===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor));let St={};St.attribute=ht,ht&&ht.data&&(St.data=ht.data),G[V]=St,W++}r.attributes=G,r.attributesNum=W,r.index=H}function _(){let b=r.newAttributes;for(let L=0,F=b.length;L<F;L++)b[L]=0}function m(b){f(b,0)}function f(b,L){let F=r.newAttributes,H=r.enabledAttributes,G=r.attributeDivisors;F[b]=1,H[b]===0&&(s.enableVertexAttribArray(b),H[b]=1),G[b]!==L&&(s.vertexAttribDivisor(b,L),G[b]=L)}function v(){let b=r.newAttributes,L=r.enabledAttributes;for(let F=0,H=L.length;F<H;F++)L[F]!==b[F]&&(s.disableVertexAttribArray(F),L[F]=0)}function E(b,L,F,H,G,Y,W){W===!0?s.vertexAttribIPointer(b,L,F,G,Y):s.vertexAttribPointer(b,L,F,H,G,Y)}function x(b,L,F,H){_();let G=H.attributes,Y=F.getAttributes(),W=L.defaultAttributeValues;for(let $ in Y){let V=Y[$];if(V.location>=0){let rt=G[$];if(rt===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor)),rt!==void 0){let ht=rt.normalized,St=rt.itemSize,Wt=t.get(rt);if(Wt===void 0)continue;let le=Wt.buffer,pe=Wt.type,ee=Wt.bytesPerElement,Z=pe===s.INT||pe===s.UNSIGNED_INT||rt.gpuType===na;if(rt.isInterleavedBufferAttribute){let Q=rt.data,mt=Q.stride,Nt=rt.offset;if(Q.isInstancedInterleavedBuffer){for(let Tt=0;Tt<V.locationSize;Tt++)f(V.location+Tt,Q.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Tt=0;Tt<V.locationSize;Tt++)m(V.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,le);for(let Tt=0;Tt<V.locationSize;Tt++)E(V.location+Tt,St/V.locationSize,pe,ht,mt*ee,(Nt+St/V.locationSize*Tt)*ee,Z)}else{if(rt.isInstancedBufferAttribute){for(let Q=0;Q<V.locationSize;Q++)f(V.location+Q,rt.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Q=0;Q<V.locationSize;Q++)m(V.location+Q);s.bindBuffer(s.ARRAY_BUFFER,le);for(let Q=0;Q<V.locationSize;Q++)E(V.location+Q,St/V.locationSize,pe,ht,St*ee,St/V.locationSize*Q*ee,Z)}}else if(W!==void 0){let ht=W[$];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(V.location,ht);break;case 3:s.vertexAttrib3fv(V.location,ht);break;case 4:s.vertexAttrib4fv(V.location,ht);break;default:s.vertexAttrib1fv(V.location,ht)}}}}v()}function w(){P();for(let b in i){let L=i[b];for(let F in L){let H=L[F];for(let G in H)h(H[G].object),delete H[G];delete L[F]}delete i[b]}}function T(b){if(i[b.id]===void 0)return;let L=i[b.id];for(let F in L){let H=L[F];for(let G in H)h(H[G].object),delete H[G];delete L[F]}delete i[b.id]}function C(b){for(let L in i){let F=i[L];if(F[b.id]===void 0)continue;let H=F[b.id];for(let G in H)h(H[G].object),delete H[G];delete F[b.id]}}function P(){S(),a=!0,r!==n&&(r=n,l(r.object))}function S(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function yp(s,t,e){let i;function n(l){i=l}function r(l,h){s.drawArrays(i,l,h),e.update(h,i,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,i,1)}function c(l,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function vp(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(C){return!(C!==hi&&i.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let P=C===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==xi&&i.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ei&&!P)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:w,maxSamples:T}}function Mp(s){let t=this,e=null,i=0,n=!1,r=!1,a=new vi,o=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||n;return n=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:i,E=v*4,x=f.clippingState||null;c.value=x,x=h(g,d,E,p);for(let w=0;w!==E;++w)x[w]=e[w];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let f=p+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,x=p;E!==_;++E,x+=4)a.copy(u[E]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function bp(s){let t=new WeakMap;function e(a,o){return o===ta?a.mapping=vn:o===ea&&(a.mapping=Mn),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===ta||o===ea)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ar(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",n),e(l.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var as=4,Zc=[.125,.215,.35,.446,.526,.582],wn=20,rl=new yn,Kc=new Rt,al=null,ol=0,ll=0,cl=!1,Tn=(1+Math.sqrt(5))/2,rs=1/Tn,$c=[new R(-Tn,rs,0),new R(Tn,rs,0),new R(-rs,0,Tn),new R(rs,0,Tn),new R(0,Tn,-rs),new R(0,Tn,rs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Sp=new R,Ha=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100,r={}){let{size:a=256,position:o=Sp}=r;al=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,n,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(al,ol,ll),this._renderer.xr.enabled=cl,t.scissorTest=!1,ka(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vn||t.mapping===Mn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),al=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:ci,format:hi,colorSpace:mn,depthBuffer:!1},n=Jc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jc(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ep(r)),this._blurMaterial=Tp(r,t,e)}return n}_compileMaterial(t){let e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,rl)}_sceneToCubeUV(t,e,i,n,r){let c=new Fe(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Kc),u.toneMapping=Bi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null));let _=new Qt({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),m=new xe(new ne,_),f=!1,v=t.background;v?v.isColor&&(_.color.copy(v),t.background=null,f=!0):(_.color.copy(Kc),f=!0);for(let E=0;E<6;E++){let x=E%3;x===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):x===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));let w=this._cubeSize;ka(n,x*w,E>2?w:0,w,w),u.setRenderTarget(n),f&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===vn||t.mapping===Mn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qc());let r=n?this._cubemapMaterial:this._equirectMaterial,a=new xe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;ka(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,rl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$c[(n-r-1)%$c.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new xe(this._lodPlanes[n],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*wn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):wn;m>wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wn}`);let f=[],v=0;for(let C=0;C<wn;++C){let P=C/_,S=Math.exp(-P*P/2);f.push(S),C===0?v+=S:C<m&&(v+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;let x=this._sizeLods[n],w=3*x*(n>E-as?n-E+as:0),T=4*(this._cubeSize-x);ka(e,w,T,3*x,2*x),c.setRenderTarget(e),c.render(u,rl)}};function Ep(s){let t=[],e=[],i=[],n=s,r=s-as+1+Zc.length;for(let a=0;a<r;a++){let o=Math.pow(2,n);e.push(o);let c=1/o;a>s-as?c=Zc[a-s+as-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),E=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let T=0;T<p;T++){let C=T%3*2/3-1,P=T>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];v.set(S,_*g*T),E.set(d,m*g*T);let b=[T,T,T,T,T,T];x.set(b,f*g*T)}let w=new Me;w.setAttribute("position",new Re(v,_)),w.setAttribute("uv",new Re(E,m)),w.setAttribute("faceIndex",new Re(x,f)),t.push(w),n>as&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Jc(s,t,e){let i=new He(s,t,e);return i.texture.mapping=zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ka(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Tp(s,t,e){let i=new Float32Array(wn),n=new R(0,1,0);return new be({name:"SphericalGaussianBlur",defines:{n:wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Qc(){return new be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function jc(){return new be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function yl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wp(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===ta||c===ea,h=c===vn||c===Mn;if(l||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ha(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&n(p)?(e===null&&(e=new Ha(s)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function n(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Ap(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Wn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Rp(s,t,e,i){let n={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete n[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let p in d)t.update(d[p],s.ARRAY_BUFFER)}function l(u){let d=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let v=p.array;_=p.version;for(let E=0,x=v.length;E<x;E+=3){let w=v[E+0],T=v[E+1],C=v[E+2];d.push(w,T,T,C,C,w)}}else if(g!==void 0){let v=g.array;_=g.version;for(let E=0,x=v.length/3-1;E<x;E+=3){let w=E+0,T=E+1,C=E+2;d.push(w,T,T,C,C,w)}}else return;let m=new(tl(d)?ws:Ts)(d,1);m.version=_;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Cp(s,t,e){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){s.drawElements(i,p,r,d*a),e.update(p,i,1)}function l(d,p,g){g!==0&&(s.drawElementsInstanced(i,p,r,d*a,g),e.update(p,i,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function u(d,p,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,_,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*_[v];e.update(f,i,1)}}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ip(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Pp(s,t,e){let i=new WeakMap,n=new se;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let S=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let x=o.attributes.position.count*E,w=1;x>t.maxTextureSize&&(w=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*w*4*u),C=new Es(T,x,w,u);C.type=Ei,C.needsUpdate=!0;let P=E*4;for(let b=0;b<u;b++){let L=m[b],F=f[b],H=v[b],G=x*w*4*b;for(let Y=0;Y<L.count;Y++){let W=Y*P;p===!0&&(n.fromBufferAttribute(L,Y),T[G+W+0]=n.x,T[G+W+1]=n.y,T[G+W+2]=n.z,T[G+W+3]=0),g===!0&&(n.fromBufferAttribute(F,Y),T[G+W+4]=n.x,T[G+W+5]=n.y,T[G+W+6]=n.z,T[G+W+7]=0),_===!0&&(n.fromBufferAttribute(H,Y),T[G+W+8]=n.x,T[G+W+9]=n.y,T[G+W+10]=n.z,T[G+W+11]=H.itemSize===4?n.w:1)}}d={count:u,texture:C,size:new wt(x,w)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Lp(s,t,e,i){let n=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(n.get(u)!==l&&(t.update(u),n.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;n.get(d)!==l&&(d.update(),n.set(d,l))}return u}function a(){n=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var _h=new je,th=new Ps(1,1),yh=new Es,vh=new Tr,Mh=new Rs,eh=[],ih=[],nh=new Float32Array(16),sh=new Float32Array(9),rh=new Float32Array(4);function ls(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=eh[n];if(r===void 0&&(r=new Float32Array(n),eh[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Pe(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Le(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Ga(s,t){let e=ih[t];e===void 0&&(e=new Int32Array(t),ih[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Dp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Up(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2fv(this.addr,t),Le(e,t)}}function Np(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;s.uniform3fv(this.addr,t),Le(e,t)}}function Fp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4fv(this.addr,t),Le(e,t)}}function Bp(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,i))return;rh.set(i),s.uniformMatrix2fv(this.addr,!1,rh),Le(e,i)}}function Op(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,i))return;sh.set(i),s.uniformMatrix3fv(this.addr,!1,sh),Le(e,i)}}function kp(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,i))return;nh.set(i),s.uniformMatrix4fv(this.addr,!1,nh),Le(e,i)}}function zp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Hp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2iv(this.addr,t),Le(e,t)}}function Vp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3iv(this.addr,t),Le(e,t)}}function Gp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4iv(this.addr,t),Le(e,t)}}function Wp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Xp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2uiv(this.addr,t),Le(e,t)}}function qp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3uiv(this.addr,t),Le(e,t)}}function Yp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4uiv(this.addr,t),Le(e,t)}}function Zp(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(th.compareFunction=Jo,r=th):r=_h,e.setTexture2D(t||r,n)}function Kp(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||vh,n)}function $p(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Mh,n)}function Jp(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||yh,n)}function Qp(s){switch(s){case 5126:return Dp;case 35664:return Up;case 35665:return Np;case 35666:return Fp;case 35674:return Bp;case 35675:return Op;case 35676:return kp;case 5124:case 35670:return zp;case 35667:case 35671:return Hp;case 35668:case 35672:return Vp;case 35669:case 35673:return Gp;case 5125:return Wp;case 36294:return Xp;case 36295:return qp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return Kp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Jp}}function jp(s,t){s.uniform1fv(this.addr,t)}function tm(s,t){let e=ls(t,this.size,2);s.uniform2fv(this.addr,e)}function em(s,t){let e=ls(t,this.size,3);s.uniform3fv(this.addr,e)}function im(s,t){let e=ls(t,this.size,4);s.uniform4fv(this.addr,e)}function nm(s,t){let e=ls(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function sm(s,t){let e=ls(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function rm(s,t){let e=ls(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function am(s,t){s.uniform1iv(this.addr,t)}function om(s,t){s.uniform2iv(this.addr,t)}function lm(s,t){s.uniform3iv(this.addr,t)}function cm(s,t){s.uniform4iv(this.addr,t)}function hm(s,t){s.uniform1uiv(this.addr,t)}function um(s,t){s.uniform2uiv(this.addr,t)}function dm(s,t){s.uniform3uiv(this.addr,t)}function fm(s,t){s.uniform4uiv(this.addr,t)}function pm(s,t,e){let i=this.cache,n=t.length,r=Ga(e,n);Pe(i,r)||(s.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||_h,r[a])}function mm(s,t,e){let i=this.cache,n=t.length,r=Ga(e,n);Pe(i,r)||(s.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||vh,r[a])}function gm(s,t,e){let i=this.cache,n=t.length,r=Ga(e,n);Pe(i,r)||(s.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Mh,r[a])}function xm(s,t,e){let i=this.cache,n=t.length,r=Ga(e,n);Pe(i,r)||(s.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||yh,r[a])}function _m(s){switch(s){case 5126:return jp;case 35664:return tm;case 35665:return em;case 35666:return im;case 35674:return nm;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return hm;case 36294:return um;case 36295:return dm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return xm}}var ul=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Qp(e.type)}},dl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_m(e.type)}},fl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},hl=/(\w+)(\])?(\[|\.)?/g;function ah(s,t){s.seq.push(t),s.map[t.id]=t}function ym(s,t,e){let i=s.name,n=i.length;for(hl.lastIndex=0;;){let r=hl.exec(i),a=hl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===n){ah(e,l===void 0?new ul(o,s,t):new dl(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new fl(o),ah(e,u)),e=u}}}var os=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),a=t.getUniformLocation(e,r.name);ym(r,a,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function oh(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var vm=37297,Mm=0;function bm(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var lh=new kt;function Sm(s){Yt._getMatrix(lh,Yt.workingColorSpace,s);let t=`mat3( ${lh.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(s)){case Ms:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ch(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+bm(s.getShaderSource(t),o)}else return r}function Em(s,t){let e=Sm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Tm(s,t){let e;switch(t){case Zr:e="Linear";break;case Kr:e="Reinhard";break;case $r:e="Cineon";break;case ts:e="ACESFilmic";break;case Qr:e="AgX";break;case jr:e="Neutral";break;case Jr:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var za=new R;function wm(){Yt.getLuminanceCoefficients(za);let s=za.x.toFixed(4),t=za.y.toFixed(4),e=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Am(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function Rm(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Cm(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function qs(s){return s!==""}function hh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Im=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(s){return s.replace(Im,Lm)}var Pm=new Map;function Lm(s,t){let e=Gt[t];if(e===void 0){let i=Pm.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return pl(e)}var Dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(s){return s.replace(Dm,Um)}function Um(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function fh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Nm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Bo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===dc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Si&&(t="SHADOWMAP_TYPE_VSM"),t}function Fm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case vn:case Mn:t="ENVMAP_TYPE_CUBE";break;case zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Mn:t="ENVMAP_MODE_REFRACTION";break}return t}function Om(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case zo:t="ENVMAP_BLENDING_MULTIPLY";break;case Pc:t="ENVMAP_BLENDING_MIX";break;case Lc:t="ENVMAP_BLENDING_ADD";break}return t}function km(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function zm(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Nm(e),l=Fm(e),h=Bm(e),u=Om(e),d=km(e),p=Am(e),g=Rm(r),_=n.createProgram(),m,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qs).join(`
`),f.length>0&&(f+=`
`)):(m=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),f=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Bi?Tm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Em("linearToOutputTexel",e.outputColorSpace),wm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qs).join(`
`)),a=pl(a),a=hh(a,e),a=uh(a,e),o=pl(o),o=hh(o,e),o=uh(o,e),a=dh(a),o=dh(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let E=v+m+a,x=v+f+o,w=oh(n,n.VERTEX_SHADER,E),T=oh(n,n.FRAGMENT_SHADER,x);n.attachShader(_,w),n.attachShader(_,T),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function C(L){if(s.debug.checkShaderErrors){let F=n.getProgramInfoLog(_)||"",H=n.getShaderInfoLog(w)||"",G=n.getShaderInfoLog(T)||"",Y=F.trim(),W=H.trim(),$=G.trim(),V=!0,rt=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,w,T);else{let ht=ch(n,w,"vertex"),St=ch(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+ht+`
`+St)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(W===""||$==="")&&(rt=!1);rt&&(L.diagnostics={runnable:V,programLog:Y,vertexShader:{log:W,prefix:m},fragmentShader:{log:$,prefix:f}})}n.deleteShader(w),n.deleteShader(T),P=new os(n,_),S=Cm(n,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(_,vm)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}var Hm=0,ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new gl(t),e.set(t,i)),i}},gl=class{constructor(t){this.id=Hm++,this.code=t,this.usedTimes=0}};function Vm(s,t,e,i,n,r,a){let o=new qn,c=new ml,l=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,p=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,b,L,F,H){let G=F.fog,Y=H.geometry,W=S.isMeshStandardMaterial?F.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),V=$&&$.mapping===zs?$.image.height:null,rt=g[S.type];S.precision!==null&&(p=n.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let ht=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,St=ht!==void 0?ht.length:0,Wt=0;Y.morphAttributes.position!==void 0&&(Wt=1),Y.morphAttributes.normal!==void 0&&(Wt=2),Y.morphAttributes.color!==void 0&&(Wt=3);let le,pe,ee,Z;if(rt){let ie=Ti[rt];le=ie.vertexShader,pe=ie.fragmentShader}else le=S.vertexShader,pe=S.fragmentShader,c.update(S),ee=c.getVertexShaderID(S),Z=c.getFragmentShaderID(S);let Q=s.getRenderTarget(),mt=s.state.buffers.depth.getReversed(),Nt=H.isInstancedMesh===!0,Tt=H.isBatchedMesh===!0,Kt=!!S.map,Oe=!!S.matcap,I=!!$,me=!!S.aoMap,Ot=!!S.lightMap,Dt=!!S.bumpMap,_t=!!S.normalMap,ge=!!S.displacementMap,yt=!!S.emissiveMap,Vt=!!S.metalnessMap,De=!!S.roughnessMap,Ee=S.anisotropy>0,A=S.clearcoat>0,y=S.dispersion>0,B=S.iridescence>0,q=S.sheen>0,J=S.transmission>0,X=Ee&&!!S.anisotropyMap,Et=A&&!!S.clearcoatMap,nt=A&&!!S.clearcoatNormalMap,vt=A&&!!S.clearcoatRoughnessMap,Mt=B&&!!S.iridescenceMap,et=B&&!!S.iridescenceThicknessMap,ct=q&&!!S.sheenColorMap,Pt=q&&!!S.sheenRoughnessMap,bt=!!S.specularMap,ot=!!S.specularColorMap,zt=!!S.specularIntensityMap,D=J&&!!S.transmissionMap,it=J&&!!S.thicknessMap,st=!!S.gradientMap,ft=!!S.alphaMap,j=S.alphaTest>0,K=!!S.alphaHash,xt=!!S.extensions,Ft=Bi;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ft=s.toneMapping);let ce={shaderID:rt,shaderType:S.type,shaderName:S.name,vertexShader:le,fragmentShader:pe,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Tt,batchingColor:Tt&&H._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&H.instanceColor!==null,instancingMorph:Nt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:mn,alphaToCoverage:!!S.alphaToCoverage,map:Kt,matcap:Oe,envMap:I,envMapMode:I&&$.mapping,envMapCubeUVHeight:V,aoMap:me,lightMap:Ot,bumpMap:Dt,normalMap:_t,displacementMap:d&&ge,emissiveMap:yt,normalMapObjectSpace:_t&&S.normalMapType===Fc,normalMapTangentSpace:_t&&S.normalMapType===$o,metalnessMap:Vt,roughnessMap:De,anisotropy:Ee,anisotropyMap:X,clearcoat:A,clearcoatMap:Et,clearcoatNormalMap:nt,clearcoatRoughnessMap:vt,dispersion:y,iridescence:B,iridescenceMap:Mt,iridescenceThicknessMap:et,sheen:q,sheenColorMap:ct,sheenRoughnessMap:Pt,specularMap:bt,specularColorMap:ot,specularIntensityMap:zt,transmission:J,transmissionMap:D,thicknessMap:it,gradientMap:st,opaque:S.transparent===!1&&S.blending===fn&&S.alphaToCoverage===!1,alphaMap:ft,alphaTest:j,alphaHash:K,combine:S.combine,mapUv:Kt&&_(S.map.channel),aoMapUv:me&&_(S.aoMap.channel),lightMapUv:Ot&&_(S.lightMap.channel),bumpMapUv:Dt&&_(S.bumpMap.channel),normalMapUv:_t&&_(S.normalMap.channel),displacementMapUv:ge&&_(S.displacementMap.channel),emissiveMapUv:yt&&_(S.emissiveMap.channel),metalnessMapUv:Vt&&_(S.metalnessMap.channel),roughnessMapUv:De&&_(S.roughnessMap.channel),anisotropyMapUv:X&&_(S.anisotropyMap.channel),clearcoatMapUv:Et&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:nt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(S.sheenRoughnessMap.channel),specularMapUv:bt&&_(S.specularMap.channel),specularColorMapUv:ot&&_(S.specularColorMap.channel),specularIntensityMapUv:zt&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:it&&_(S.thicknessMap.channel),alphaMapUv:ft&&_(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(_t||Ee),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(Kt||ft),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:mt,skinning:H.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Wt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Kt&&S.map.isVideoTexture===!0&&Yt.getTransfer(S.map.colorSpace)===jt,decodeVideoTextureEmissive:yt&&S.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(S.emissiveMap.colorSpace)===jt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===qe,flipSided:S.side===Be,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:xt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&S.extensions.multiDraw===!0||Tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ce.vertexUv1s=l.has(1),ce.vertexUv2s=l.has(2),ce.vertexUv3s=l.has(3),l.clear(),ce}function f(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)b.push(L),b.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(v(b,S),E(b,S),b.push(s.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function v(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function E(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){let b=g[S.type],L;if(b){let F=Ti[b];L=ki.clone(F.uniforms)}else L=S.uniforms;return L}function w(S,b){let L;for(let F=0,H=h.length;F<H;F++){let G=h[F];if(G.cacheKey===b){L=G,++L.usedTimes;break}}return L===void 0&&(L=new zm(s,b,S,r),h.push(L)),L}function T(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:w,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:P}}function Gm(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function Wm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ph(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function mh(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,p,g,_,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){let f=a(u,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):e.push(f)}function c(u,d,p,g,_,m){let f=a(u,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||Wm),i.length>1&&i.sort(d||ph),n.length>1&&n.sort(d||ph)}function h(){for(let u=t,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:c,finish:h,sort:l}}function Xm(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new mh,s.set(i,[a])):n>=r.length?(a=new mh,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function qm(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Rt};break;case"SpotLight":e={position:new R,direction:new R,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function Ym(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Zm=0;function Km(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function $m(s){let t=new qm,e=Ym(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new R);let n=new R,r=new he,a=new he;function o(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,v=0,E=0,x=0,w=0,T=0,C=0;l.sort(Km);for(let S=0,b=l.length;S<b;S++){let L=l[S],F=L.color,H=L.intensity,G=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*H,u+=F.g*H,d+=F.b*H;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],H);C++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let $=L.shadow,V=e.get(L);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=W,p++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(F).multiplyScalar(H),W.distance=G,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[_]=W;let $=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,$.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[_]=$.matrix,L.castShadow){let V=e.get(L);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=Y,x++}_++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(F).multiplyScalar(H),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=W,m++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let $=L.shadow,V=e.get(L);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=L.shadow.matrix,E++}i.point[g]=W,g++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(H),W.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[f]=W,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==v||P.numPointShadows!==E||P.numSpotShadows!==x||P.numSpotMaps!==w||P.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=v,P.numPointShadows=E,P.numSpotShadows=x,P.numSpotMaps=w,P.numLightProbes=C,i.version=Zm++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let f=0,v=l.length;f<v;f++){let E=l[f];if(E.isDirectionalLight){let x=i.directional[u];x.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),u++}else if(E.isSpotLight){let x=i.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let x=i.point[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function gh(s){let t=new $m(s),e=[],i=[];function n(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Jm(s){let t=new WeakMap;function e(n,r=0){let a=t.get(n),o;return a===void 0?(o=new gh(s),t.set(n,[o])):r>=a.length?(o=new gh(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Qm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tg(s,t,e){let i=new Zn,n=new wt,r=new wt,a=new se,o=new Rr({depthPacking:Nc}),c=new Cr,l={},h=e.maxTextureSize,u={[Ui]:Be,[Be]:Ui,[qe]:qe},d=new be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Qm,fragmentShader:jm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Me;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new xe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bo;let f=this.type;this.render=function(T,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let S=s.getRenderTarget(),b=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),F=s.state;F.setBlending(gi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=f!==Si&&this.type===Si,G=f===Si&&this.type!==Si;for(let Y=0,W=T.length;Y<W;Y++){let $=T[Y],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);let rt=V.getFrameExtents();if(n.multiply(rt),r.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/rt.x),n.x=r.x*rt.x,V.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/rt.y),n.y=r.y*rt.y,V.mapSize.y=r.y)),V.map===null||H===!0||G===!0){let St=this.type!==Si?{minFilter:oi,magFilter:oi}:{};V.map!==null&&V.map.dispose(),V.map=new He(n.x,n.y,St),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();let ht=V.getViewportCount();for(let St=0;St<ht;St++){let Wt=V.getViewport(St);a.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),F.viewport(a),V.updateMatrices($,St),i=V.getFrustum(),x(C,P,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===Si&&v(V,P),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(S,b,L)};function v(T,C){let P=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new He(n.x,n.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,P,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,P,p,_,null)}function E(T,C,P,S){let b=null,L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)b=L;else if(b=P.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=b.uuid,H=C.uuid,G=l[F];G===void 0&&(G={},l[F]=G);let Y=G[H];Y===void 0&&(Y=b.clone(),G[H]=Y,C.addEventListener("dispose",w)),b=Y}if(b.visible=C.visible,b.wireframe=C.wireframe,S===Si?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let F=s.properties.get(b);F.light=P}return b}function x(T,C,P,S,b){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Si)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let H=t.update(T),G=T.material;if(Array.isArray(G)){let Y=H.groups;for(let W=0,$=Y.length;W<$;W++){let V=Y[W],rt=G[V.materialIndex];if(rt&&rt.visible){let ht=E(T,rt,S,b);T.onBeforeShadow(s,T,C,P,H,ht,V),s.renderBufferDirect(P,null,H,ht,T,V),T.onAfterShadow(s,T,C,P,H,ht,V)}}}else if(G.visible){let Y=E(T,G,S,b);T.onBeforeShadow(s,T,C,P,H,Y,null),s.renderBufferDirect(P,null,H,Y,T,null),T.onAfterShadow(s,T,C,P,H,Y,null)}}let F=T.children;for(let H=0,G=F.length;H<G;H++)x(F[H],C,P,S,b)}function w(T){T.target.removeEventListener("dispose",w);for(let P in l){let S=l[P],b=T.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var eg={[Hr]:Vr,[Gr]:qr,[Wr]:Yr,[pn]:Xr,[Vr]:Hr,[qr]:Gr,[Yr]:Wr,[Xr]:pn};function ig(s,t){function e(){let D=!1,it=new se,st=null,ft=new se(0,0,0,0);return{setMask:function(j){st!==j&&!D&&(s.colorMask(j,j,j,j),st=j)},setLocked:function(j){D=j},setClear:function(j,K,xt,Ft,ce){ce===!0&&(j*=Ft,K*=Ft,xt*=Ft),it.set(j,K,xt,Ft),ft.equals(it)===!1&&(s.clearColor(j,K,xt,Ft),ft.copy(it))},reset:function(){D=!1,st=null,ft.set(-1,0,0,0)}}}function i(){let D=!1,it=!1,st=null,ft=null,j=null;return{setReversed:function(K){if(it!==K){let xt=t.get("EXT_clip_control");K?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT),it=K;let Ft=j;j=null,this.setClear(Ft)}},getReversed:function(){return it},setTest:function(K){K?Q(s.DEPTH_TEST):mt(s.DEPTH_TEST)},setMask:function(K){st!==K&&!D&&(s.depthMask(K),st=K)},setFunc:function(K){if(it&&(K=eg[K]),ft!==K){switch(K){case Hr:s.depthFunc(s.NEVER);break;case Vr:s.depthFunc(s.ALWAYS);break;case Gr:s.depthFunc(s.LESS);break;case pn:s.depthFunc(s.LEQUAL);break;case Wr:s.depthFunc(s.EQUAL);break;case Xr:s.depthFunc(s.GEQUAL);break;case qr:s.depthFunc(s.GREATER);break;case Yr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ft=K}},setLocked:function(K){D=K},setClear:function(K){j!==K&&(it&&(K=1-K),s.clearDepth(K),j=K)},reset:function(){D=!1,st=null,ft=null,j=null,it=!1}}}function n(){let D=!1,it=null,st=null,ft=null,j=null,K=null,xt=null,Ft=null,ce=null;return{setTest:function(ie){D||(ie?Q(s.STENCIL_TEST):mt(s.STENCIL_TEST))},setMask:function(ie){it!==ie&&!D&&(s.stencilMask(ie),it=ie)},setFunc:function(ie,Ai,yi){(st!==ie||ft!==Ai||j!==yi)&&(s.stencilFunc(ie,Ai,yi),st=ie,ft=Ai,j=yi)},setOp:function(ie,Ai,yi){(K!==ie||xt!==Ai||Ft!==yi)&&(s.stencilOp(ie,Ai,yi),K=ie,xt=Ai,Ft=yi)},setLocked:function(ie){D=ie},setClear:function(ie){ce!==ie&&(s.clearStencil(ie),ce=ie)},reset:function(){D=!1,it=null,st=null,ft=null,j=null,K=null,xt=null,Ft=null,ce=null}}}let r=new e,a=new i,o=new n,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,E=null,x=null,w=null,T=null,C=new Rt(0,0,0),P=0,S=!1,b=null,L=null,F=null,H=null,G=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,$=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=$>=2);let rt=null,ht={},St=s.getParameter(s.SCISSOR_BOX),Wt=s.getParameter(s.VIEWPORT),le=new se().fromArray(St),pe=new se().fromArray(Wt);function ee(D,it,st,ft){let j=new Uint8Array(4),K=s.createTexture();s.bindTexture(D,K),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xt=0;xt<st;xt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(it,0,s.RGBA,1,1,ft,0,s.RGBA,s.UNSIGNED_BYTE,j):s.texImage2D(it+xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,j);return K}let Z={};Z[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(s.DEPTH_TEST),a.setFunc(pn),Dt(!1),_t(Fo),Q(s.CULL_FACE),me(gi);function Q(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function mt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Nt(D,it){return u[D]!==it?(s.bindFramebuffer(D,it),u[D]=it,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=it),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=it),!0):!1}function Tt(D,it){let st=p,ft=!1;if(D){st=d.get(it),st===void 0&&(st=[],d.set(it,st));let j=D.textures;if(st.length!==j.length||st[0]!==s.COLOR_ATTACHMENT0){for(let K=0,xt=j.length;K<xt;K++)st[K]=s.COLOR_ATTACHMENT0+K;st.length=j.length,ft=!0}}else st[0]!==s.BACK&&(st[0]=s.BACK,ft=!0);ft&&s.drawBuffers(st)}function Kt(D){return g!==D?(s.useProgram(D),g=D,!0):!1}let Oe={[Ki]:s.FUNC_ADD,[pc]:s.FUNC_SUBTRACT,[mc]:s.FUNC_REVERSE_SUBTRACT};Oe[gc]=s.MIN,Oe[xc]=s.MAX;let I={[_c]:s.ZERO,[yc]:s.ONE,[vc]:s.SRC_COLOR,[_r]:s.SRC_ALPHA,[wc]:s.SRC_ALPHA_SATURATE,[Ec]:s.DST_COLOR,[bc]:s.DST_ALPHA,[Mc]:s.ONE_MINUS_SRC_COLOR,[yr]:s.ONE_MINUS_SRC_ALPHA,[Tc]:s.ONE_MINUS_DST_COLOR,[Sc]:s.ONE_MINUS_DST_ALPHA,[Ac]:s.CONSTANT_COLOR,[Rc]:s.ONE_MINUS_CONSTANT_COLOR,[Cc]:s.CONSTANT_ALPHA,[Ic]:s.ONE_MINUS_CONSTANT_ALPHA};function me(D,it,st,ft,j,K,xt,Ft,ce,ie){if(D===gi){_===!0&&(mt(s.BLEND),_=!1);return}if(_===!1&&(Q(s.BLEND),_=!0),D!==fc){if(D!==m||ie!==S){if((f!==Ki||x!==Ki)&&(s.blendEquation(s.FUNC_ADD),f=Ki,x=Ki),ie)switch(D){case fn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case oe:s.blendFunc(s.ONE,s.ONE);break;case Oo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ko:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case fn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case oe:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Oo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ko:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,E=null,w=null,T=null,C.set(0,0,0),P=0,m=D,S=ie}return}j=j||it,K=K||st,xt=xt||ft,(it!==f||j!==x)&&(s.blendEquationSeparate(Oe[it],Oe[j]),f=it,x=j),(st!==v||ft!==E||K!==w||xt!==T)&&(s.blendFuncSeparate(I[st],I[ft],I[K],I[xt]),v=st,E=ft,w=K,T=xt),(Ft.equals(C)===!1||ce!==P)&&(s.blendColor(Ft.r,Ft.g,Ft.b,ce),C.copy(Ft),P=ce),m=D,S=!1}function Ot(D,it){D.side===qe?mt(s.CULL_FACE):Q(s.CULL_FACE);let st=D.side===Be;it&&(st=!st),Dt(st),D.blending===fn&&D.transparent===!1?me(gi):me(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let ft=D.stencilWrite;o.setTest(ft),ft&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),yt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(D){b!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),b=D)}function _t(D){D!==hc?(Q(s.CULL_FACE),D!==L&&(D===Fo?s.cullFace(s.BACK):D===uc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):mt(s.CULL_FACE),L=D}function ge(D){D!==F&&(W&&s.lineWidth(D),F=D)}function yt(D,it,st){D?(Q(s.POLYGON_OFFSET_FILL),(H!==it||G!==st)&&(s.polygonOffset(it,st),H=it,G=st)):mt(s.POLYGON_OFFSET_FILL)}function Vt(D){D?Q(s.SCISSOR_TEST):mt(s.SCISSOR_TEST)}function De(D){D===void 0&&(D=s.TEXTURE0+Y-1),rt!==D&&(s.activeTexture(D),rt=D)}function Ee(D,it,st){st===void 0&&(rt===null?st=s.TEXTURE0+Y-1:st=rt);let ft=ht[st];ft===void 0&&(ft={type:void 0,texture:void 0},ht[st]=ft),(ft.type!==D||ft.texture!==it)&&(rt!==st&&(s.activeTexture(st),rt=st),s.bindTexture(D,it||Z[D]),ft.type=D,ft.texture=it)}function A(){let D=ht[rt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(D){le.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),le.copy(D))}function Pt(D){pe.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),pe.copy(D))}function bt(D,it){let st=l.get(it);st===void 0&&(st=new WeakMap,l.set(it,st));let ft=st.get(D);ft===void 0&&(ft=s.getUniformBlockIndex(it,D.name),st.set(D,ft))}function ot(D,it){let ft=l.get(it).get(D);c.get(it)!==ft&&(s.uniformBlockBinding(it,ft,D.__bindingPointIndex),c.set(it,ft))}function zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,ht={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,E=null,x=null,w=null,T=null,C=new Rt(0,0,0),P=0,S=!1,b=null,L=null,F=null,H=null,G=null,le.set(0,0,s.canvas.width,s.canvas.height),pe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:mt,bindFramebuffer:Nt,drawBuffers:Tt,useProgram:Kt,setBlending:me,setMaterial:Ot,setFlipSided:Dt,setCullFace:_t,setLineWidth:ge,setPolygonOffset:yt,setScissorTest:Vt,activeTexture:De,bindTexture:Ee,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:B,texImage2D:Mt,texImage3D:et,updateUBOMapping:bt,uniformBlockBinding:ot,texStorage2D:nt,texStorage3D:vt,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:Et,scissor:ct,viewport:Pt,reset:zt}}function ng(s,t,e,i,n,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new wt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return p?new OffscreenCanvas(A,y):Ss("canvas")}function _(A,y,B){let q=1,J=Ee(A);if((J.width>B||J.height>B)&&(q=B/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let X=Math.floor(q*J.width),Et=Math.floor(q*J.height);u===void 0&&(u=g(X,Et));let nt=y?g(X,Et):u;return nt.width=X,nt.height=Et,nt.getContext("2d").drawImage(A,0,0,X,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Et+")."),nt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){s.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(A,y,B,q,J=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=y;if(y===s.RED&&(B===s.FLOAT&&(X=s.R32F),B===s.HALF_FLOAT&&(X=s.R16F),B===s.UNSIGNED_BYTE&&(X=s.R8)),y===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.R8UI),B===s.UNSIGNED_SHORT&&(X=s.R16UI),B===s.UNSIGNED_INT&&(X=s.R32UI),B===s.BYTE&&(X=s.R8I),B===s.SHORT&&(X=s.R16I),B===s.INT&&(X=s.R32I)),y===s.RG&&(B===s.FLOAT&&(X=s.RG32F),B===s.HALF_FLOAT&&(X=s.RG16F),B===s.UNSIGNED_BYTE&&(X=s.RG8)),y===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.RG8UI),B===s.UNSIGNED_SHORT&&(X=s.RG16UI),B===s.UNSIGNED_INT&&(X=s.RG32UI),B===s.BYTE&&(X=s.RG8I),B===s.SHORT&&(X=s.RG16I),B===s.INT&&(X=s.RG32I)),y===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.RGB8UI),B===s.UNSIGNED_SHORT&&(X=s.RGB16UI),B===s.UNSIGNED_INT&&(X=s.RGB32UI),B===s.BYTE&&(X=s.RGB8I),B===s.SHORT&&(X=s.RGB16I),B===s.INT&&(X=s.RGB32I)),y===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),B===s.UNSIGNED_INT&&(X=s.RGBA32UI),B===s.BYTE&&(X=s.RGBA8I),B===s.SHORT&&(X=s.RGBA16I),B===s.INT&&(X=s.RGBA32I)),y===s.RGB&&(B===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),y===s.RGBA){let Et=J?Ms:Yt.getTransfer(q);B===s.FLOAT&&(X=s.RGBA32F),B===s.HALF_FLOAT&&(X=s.RGBA16F),B===s.UNSIGNED_BYTE&&(X=Et===jt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function x(A,y){let B;return A?y===null||y===en||y===is?B=s.DEPTH24_STENCIL8:y===Ei?B=s.DEPTH32F_STENCIL8:y===es&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===en||y===is?B=s.DEPTH_COMPONENT24:y===Ei?B=s.DEPTH_COMPONENT32F:y===es&&(B=s.DEPTH_COMPONENT16),B}function w(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==oi&&A.minFilter!==mi?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function T(A){let y=A.target;y.removeEventListener("dispose",T),P(y),y.isVideoTexture&&h.delete(y)}function C(A){let y=A.target;y.removeEventListener("dispose",C),b(y)}function P(A){let y=i.get(A);if(y.__webglInit===void 0)return;let B=A.source,q=d.get(B);if(q){let J=q[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(A),Object.keys(q).length===0&&d.delete(B)}i.remove(A)}function S(A){let y=i.get(A);s.deleteTexture(y.__webglTexture);let B=A.source,q=d.get(B);delete q[y.__cacheKey],a.memory.textures--}function b(A){let y=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let J=0;J<y.__webglFramebuffer[q].length;J++)s.deleteFramebuffer(y.__webglFramebuffer[q][J]);else s.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)s.deleteFramebuffer(y.__webglFramebuffer[q]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let B=A.textures;for(let q=0,J=B.length;q<J;q++){let X=i.get(B[q]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(B[q])}i.remove(A)}let L=0;function F(){L=0}function H(){let A=L;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),L+=1,A}function G(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function Y(A,y){let B=i.get(A);if(A.isVideoTexture&&Vt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,A,y);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+y)}function W(A,y){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Z(B,A,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+y)}function $(A,y){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Z(B,A,y);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+y)}function V(A,y){let B=i.get(A);if(A.version>0&&B.__version!==A.version){Q(B,A,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+y)}let rt={[vr]:s.REPEAT,[Zi]:s.CLAMP_TO_EDGE,[Mr]:s.MIRRORED_REPEAT},ht={[oi]:s.NEAREST,[Dc]:s.NEAREST_MIPMAP_NEAREST,[Hs]:s.NEAREST_MIPMAP_LINEAR,[mi]:s.LINEAR,[ia]:s.LINEAR_MIPMAP_NEAREST,[tn]:s.LINEAR_MIPMAP_LINEAR},St={[Bc]:s.NEVER,[Gc]:s.ALWAYS,[Oc]:s.LESS,[Jo]:s.LEQUAL,[kc]:s.EQUAL,[Vc]:s.GEQUAL,[zc]:s.GREATER,[Hc]:s.NOTEQUAL};function Wt(A,y){if(y.type===Ei&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===mi||y.magFilter===ia||y.magFilter===Hs||y.magFilter===tn||y.minFilter===mi||y.minFilter===ia||y.minFilter===Hs||y.minFilter===tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,rt[y.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,rt[y.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,rt[y.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ht[y.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ht[y.minFilter]),y.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,St[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===oi||y.minFilter!==Hs&&y.minFilter!==tn||y.type===Ei&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function le(A,y){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",T));let q=y.source,J=d.get(q);J===void 0&&(J={},d.set(q,J));let X=G(y);if(X!==A.__cacheKey){J[X]===void 0&&(J[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[X].usedTimes++;let Et=J[A.__cacheKey];Et!==void 0&&(J[A.__cacheKey].usedTimes--,Et.usedTimes===0&&S(y)),A.__cacheKey=X,A.__webglTexture=J[X].texture}return B}function pe(A,y,B){return Math.floor(Math.floor(A/B)/y)}function ee(A,y,B,q){let X=A.updateRanges;if(X.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,B,q,y.data);else{X.sort((et,ct)=>et.start-ct.start);let Et=0;for(let et=1;et<X.length;et++){let ct=X[Et],Pt=X[et],bt=ct.start+ct.count,ot=pe(Pt.start,y.width,4),zt=pe(ct.start,y.width,4);Pt.start<=bt+1&&ot===zt&&pe(Pt.start+Pt.count-1,y.width,4)===ot?ct.count=Math.max(ct.count,Pt.start+Pt.count-ct.start):(++Et,X[Et]=Pt)}X.length=Et+1;let nt=s.getParameter(s.UNPACK_ROW_LENGTH),vt=s.getParameter(s.UNPACK_SKIP_PIXELS),Mt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let et=0,ct=X.length;et<ct;et++){let Pt=X[et],bt=Math.floor(Pt.start/4),ot=Math.ceil(Pt.count/4),zt=bt%y.width,D=Math.floor(bt/y.width),it=ot,st=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,zt),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),e.texSubImage2D(s.TEXTURE_2D,0,zt,D,it,st,B,q,y.data)}A.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,nt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,vt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Mt)}}function Z(A,y,B){let q=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=s.TEXTURE_3D);let J=le(A,y),X=y.source;e.bindTexture(q,A.__webglTexture,s.TEXTURE0+B);let Et=i.get(X);if(X.version!==Et.__version||J===!0){e.activeTexture(s.TEXTURE0+B);let nt=Yt.getPrimaries(Yt.workingColorSpace),vt=y.colorSpace===Oi?null:Yt.getPrimaries(y.colorSpace),Mt=y.colorSpace===Oi||nt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let et=_(y.image,!1,n.maxTextureSize);et=De(y,et);let ct=r.convert(y.format,y.colorSpace),Pt=r.convert(y.type),bt=E(y.internalFormat,ct,Pt,y.colorSpace,y.isVideoTexture);Wt(q,y);let ot,zt=y.mipmaps,D=y.isVideoTexture!==!0,it=Et.__version===void 0||J===!0,st=X.dataReady,ft=w(y,et);if(y.isDepthTexture)bt=x(y.format===ns,y.type),it&&(D?e.texStorage2D(s.TEXTURE_2D,1,bt,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,bt,et.width,et.height,0,ct,Pt,null));else if(y.isDataTexture)if(zt.length>0){D&&it&&e.texStorage2D(s.TEXTURE_2D,ft,bt,zt[0].width,zt[0].height);for(let j=0,K=zt.length;j<K;j++)ot=zt[j],D?st&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,ot.width,ot.height,ct,Pt,ot.data):e.texImage2D(s.TEXTURE_2D,j,bt,ot.width,ot.height,0,ct,Pt,ot.data);y.generateMipmaps=!1}else D?(it&&e.texStorage2D(s.TEXTURE_2D,ft,bt,et.width,et.height),st&&ee(y,et,ct,Pt)):e.texImage2D(s.TEXTURE_2D,0,bt,et.width,et.height,0,ct,Pt,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){D&&it&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,bt,zt[0].width,zt[0].height,et.depth);for(let j=0,K=zt.length;j<K;j++)if(ot=zt[j],y.format!==hi)if(ct!==null)if(D){if(st)if(y.layerUpdates.size>0){let xt=sl(ot.width,ot.height,y.format,y.type);for(let Ft of y.layerUpdates){let ce=ot.data.subarray(Ft*xt/ot.data.BYTES_PER_ELEMENT,(Ft+1)*xt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,Ft,ot.width,ot.height,1,ct,ce)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,ot.width,ot.height,et.depth,ct,ot.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,bt,ot.width,ot.height,et.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?st&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,ot.width,ot.height,et.depth,ct,Pt,ot.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,bt,ot.width,ot.height,et.depth,0,ct,Pt,ot.data)}else{D&&it&&e.texStorage2D(s.TEXTURE_2D,ft,bt,zt[0].width,zt[0].height);for(let j=0,K=zt.length;j<K;j++)ot=zt[j],y.format!==hi?ct!==null?D?st&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,ot.width,ot.height,ct,ot.data):e.compressedTexImage2D(s.TEXTURE_2D,j,bt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?st&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,ot.width,ot.height,ct,Pt,ot.data):e.texImage2D(s.TEXTURE_2D,j,bt,ot.width,ot.height,0,ct,Pt,ot.data)}else if(y.isDataArrayTexture)if(D){if(it&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,bt,et.width,et.height,et.depth),st)if(y.layerUpdates.size>0){let j=sl(et.width,et.height,y.format,y.type);for(let K of y.layerUpdates){let xt=et.data.subarray(K*j/et.data.BYTES_PER_ELEMENT,(K+1)*j/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,ct,Pt,xt)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ct,Pt,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,bt,et.width,et.height,et.depth,0,ct,Pt,et.data);else if(y.isData3DTexture)D?(it&&e.texStorage3D(s.TEXTURE_3D,ft,bt,et.width,et.height,et.depth),st&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ct,Pt,et.data)):e.texImage3D(s.TEXTURE_3D,0,bt,et.width,et.height,et.depth,0,ct,Pt,et.data);else if(y.isFramebufferTexture){if(it)if(D)e.texStorage2D(s.TEXTURE_2D,ft,bt,et.width,et.height);else{let j=et.width,K=et.height;for(let xt=0;xt<ft;xt++)e.texImage2D(s.TEXTURE_2D,xt,bt,j,K,0,ct,Pt,null),j>>=1,K>>=1}}else if(zt.length>0){if(D&&it){let j=Ee(zt[0]);e.texStorage2D(s.TEXTURE_2D,ft,bt,j.width,j.height)}for(let j=0,K=zt.length;j<K;j++)ot=zt[j],D?st&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,ct,Pt,ot):e.texImage2D(s.TEXTURE_2D,j,bt,ct,Pt,ot);y.generateMipmaps=!1}else if(D){if(it){let j=Ee(et);e.texStorage2D(s.TEXTURE_2D,ft,bt,j.width,j.height)}st&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,Pt,et)}else e.texImage2D(s.TEXTURE_2D,0,bt,ct,Pt,et);m(y)&&f(q),Et.__version=X.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Q(A,y,B){if(y.image.length!==6)return;let q=le(A,y),J=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);let X=i.get(J);if(J.version!==X.__version||q===!0){e.activeTexture(s.TEXTURE0+B);let Et=Yt.getPrimaries(Yt.workingColorSpace),nt=y.colorSpace===Oi?null:Yt.getPrimaries(y.colorSpace),vt=y.colorSpace===Oi||Et===nt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Mt=y.isCompressedTexture||y.image[0].isCompressedTexture,et=y.image[0]&&y.image[0].isDataTexture,ct=[];for(let K=0;K<6;K++)!Mt&&!et?ct[K]=_(y.image[K],!0,n.maxCubemapSize):ct[K]=et?y.image[K].image:y.image[K],ct[K]=De(y,ct[K]);let Pt=ct[0],bt=r.convert(y.format,y.colorSpace),ot=r.convert(y.type),zt=E(y.internalFormat,bt,ot,y.colorSpace),D=y.isVideoTexture!==!0,it=X.__version===void 0||q===!0,st=J.dataReady,ft=w(y,Pt);Wt(s.TEXTURE_CUBE_MAP,y);let j;if(Mt){D&&it&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,zt,Pt.width,Pt.height);for(let K=0;K<6;K++){j=ct[K].mipmaps;for(let xt=0;xt<j.length;xt++){let Ft=j[xt];y.format!==hi?bt!==null?D?st&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,0,0,Ft.width,Ft.height,bt,Ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,zt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,0,0,Ft.width,Ft.height,bt,ot,Ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,zt,Ft.width,Ft.height,0,bt,ot,Ft.data)}}}else{if(j=y.mipmaps,D&&it){j.length>0&&ft++;let K=Ee(ct[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,zt,K.width,K.height)}for(let K=0;K<6;K++)if(et){D?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ct[K].width,ct[K].height,bt,ot,ct[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,ct[K].width,ct[K].height,0,bt,ot,ct[K].data);for(let xt=0;xt<j.length;xt++){let ce=j[xt].image[K].image;D?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,0,0,ce.width,ce.height,bt,ot,ce.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,zt,ce.width,ce.height,0,bt,ot,ce.data)}}else{D?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,bt,ot,ct[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,bt,ot,ct[K]);for(let xt=0;xt<j.length;xt++){let Ft=j[xt];D?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,0,0,bt,ot,Ft.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,zt,bt,ot,Ft.image[K])}}}m(y)&&f(s.TEXTURE_CUBE_MAP),X.__version=J.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function mt(A,y,B,q,J,X){let Et=r.convert(B.format,B.colorSpace),nt=r.convert(B.type),vt=E(B.internalFormat,Et,nt,B.colorSpace),Mt=i.get(y),et=i.get(B);if(et.__renderTarget=y,!Mt.__hasExternalTextures){let ct=Math.max(1,y.width>>X),Pt=Math.max(1,y.height>>X);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,X,vt,ct,Pt,y.depth,0,Et,nt,null):e.texImage2D(J,X,vt,ct,Pt,0,Et,nt,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),yt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,J,et.__webglTexture,0,ge(y)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,J,et.__webglTexture,X),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(A,y,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),y.depthBuffer){let q=y.depthTexture,J=q&&q.isDepthTexture?q.type:null,X=x(y.stencilBuffer,J),Et=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=ge(y);yt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,X,y.width,y.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,X,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,X,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,A)}else{let q=y.textures;for(let J=0;J<q.length;J++){let X=q[J],Et=r.convert(X.format,X.colorSpace),nt=r.convert(X.type),vt=E(X.internalFormat,Et,nt,X.colorSpace),Mt=ge(y);B&&yt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt,vt,y.width,y.height):yt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt,vt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,vt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=i.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);let J=q.__webglTexture,X=ge(y);if(y.depthTexture.format===Vn)yt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(y.depthTexture.format===ns)yt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Kt(A){let y=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let q=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=q}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let q=A.texture.mipmaps;q&&q.length>0?Tt(y.__webglFramebuffer[0],A):Tt(y.__webglFramebuffer,A)}else if(B){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=s.createRenderbuffer(),Nt(y.__webglDepthbuffer[q],A,!1);else{let J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,X)}}else{let q=A.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Nt(y.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,X)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(A,y,B){let q=i.get(A);y!==void 0&&mt(q.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Kt(A)}function I(A){let y=A.texture,B=i.get(A),q=i.get(y);A.addEventListener("dispose",C);let J=A.textures,X=A.isWebGLCubeRenderTarget===!0,Et=J.length>1;if(Et||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=y.version,a.memory.textures++),X){B.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[nt]=[];for(let vt=0;vt<y.mipmaps.length;vt++)B.__webglFramebuffer[nt][vt]=s.createFramebuffer()}else B.__webglFramebuffer[nt]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let nt=0;nt<y.mipmaps.length;nt++)B.__webglFramebuffer[nt]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(Et)for(let nt=0,vt=J.length;nt<vt;nt++){let Mt=i.get(J[nt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&yt(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let nt=0;nt<J.length;nt++){let vt=J[nt];B.__webglColorRenderbuffer[nt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[nt]);let Mt=r.convert(vt.format,vt.colorSpace),et=r.convert(vt.type),ct=E(vt.internalFormat,Mt,et,vt.colorSpace,A.isXRRenderTarget===!0),Pt=ge(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,ct,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,B.__webglColorRenderbuffer[nt])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Nt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,y);for(let nt=0;nt<6;nt++)if(y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)mt(B.__webglFramebuffer[nt][vt],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt);else mt(B.__webglFramebuffer[nt],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);m(y)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let nt=0,vt=J.length;nt<vt;nt++){let Mt=J[nt],et=i.get(Mt),ct=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ct=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,et.__webglTexture),Wt(ct,Mt),mt(B.__webglFramebuffer,A,Mt,s.COLOR_ATTACHMENT0+nt,ct,0),m(Mt)&&f(ct)}e.unbindTexture()}else{let nt=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(nt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(nt,q.__webglTexture),Wt(nt,y),y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)mt(B.__webglFramebuffer[vt],A,y,s.COLOR_ATTACHMENT0,nt,vt);else mt(B.__webglFramebuffer,A,y,s.COLOR_ATTACHMENT0,nt,0);m(y)&&f(nt),e.unbindTexture()}A.depthBuffer&&Kt(A)}function me(A){let y=A.textures;for(let B=0,q=y.length;B<q;B++){let J=y[B];if(m(J)){let X=v(A),Et=i.get(J).__webglTexture;e.bindTexture(X,Et),f(X),e.unbindTexture()}}}let Ot=[],Dt=[];function _t(A){if(A.samples>0){if(yt(A)===!1){let y=A.textures,B=A.width,q=A.height,J=s.COLOR_BUFFER_BIT,X=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=i.get(A),nt=y.length>1;if(nt)for(let Mt=0;Mt<y.length;Mt++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);let vt=A.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Mt=0;Mt<y.length;Mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),nt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[Mt]);let et=i.get(y[Mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,et,0)}s.blitFramebuffer(0,0,B,q,0,0,B,q,J,s.NEAREST),c===!0&&(Ot.length=0,Dt.length=0,Ot.push(s.COLOR_ATTACHMENT0+Mt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ot.push(X),Dt.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Dt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),nt)for(let Mt=0;Mt<y.length;Mt++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,Et.__webglColorRenderbuffer[Mt]);let et=i.get(y[Mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,et,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function ge(A){return Math.min(n.maxSamples,A.samples)}function yt(A){let y=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Vt(A){let y=a.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function De(A,y){let B=A.colorSpace,q=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==mn&&B!==Oi&&(Yt.getTransfer(B)===jt?(q!==hi||J!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function Ee(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=Oe,this.setupRenderTarget=I,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=yt}function sg(s,t){function e(i,n=Oi){let r,a=Yt.getTransfer(n);if(i===xi)return s.UNSIGNED_BYTE;if(i===sa)return s.UNSIGNED_SHORT_4_4_4_4;if(i===ra)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Wo)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Xo)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vo)return s.BYTE;if(i===Go)return s.SHORT;if(i===es)return s.UNSIGNED_SHORT;if(i===na)return s.INT;if(i===en)return s.UNSIGNED_INT;if(i===Ei)return s.FLOAT;if(i===ci)return s.HALF_FLOAT;if(i===qo)return s.ALPHA;if(i===Yo)return s.RGB;if(i===hi)return s.RGBA;if(i===Vn)return s.DEPTH_COMPONENT;if(i===ns)return s.DEPTH_STENCIL;if(i===Zo)return s.RED;if(i===aa)return s.RED_INTEGER;if(i===Ko)return s.RG;if(i===oa)return s.RG_INTEGER;if(i===la)return s.RGBA_INTEGER;if(i===Vs||i===Gs||i===Ws||i===Xs)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ca||i===ha||i===ua||i===da)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fa||i===pa||i===ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===fa||i===pa)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ma)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ga||i===xa||i===_a||i===ya||i===va||i===Ma||i===ba||i===Sa||i===Ea||i===Ta||i===wa||i===Aa||i===Ra||i===Ca)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ga)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_a)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ya)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===va)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ma)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ba)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ea)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ta)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Aa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ra)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ca)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ia||i===Pa||i===La)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ia)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===La)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Da||i===Ua||i===Na||i===Fa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Da)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===is?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ag=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ls(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new be({vertexShader:rg,fragmentShader:ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new Ji(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_l=class extends Ni{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new xl,f={},v=e.getContextAttributes(),E=null,x=null,w=[],T=[],C=new wt,P=null,S=new Fe;S.viewport=new se;let b=new Fe;b.viewport=new se;let L=[S,b],F=new zr,H=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=w[Z];return Q===void 0&&(Q=new Yn,w[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=w[Z];return Q===void 0&&(Q=new Yn,w[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=w[Z];return Q===void 0&&(Q=new Yn,w[Z]=Q),Q.getHandSpace()};function Y(Z){let Q=T.indexOf(Z.inputSource);if(Q===-1)return;let mt=w[Q];mt!==void 0&&(mt.update(Z.inputSource,Z.frame,l||a),mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){n.removeEventListener("select",Y),n.removeEventListener("selectstart",Y),n.removeEventListener("selectend",Y),n.removeEventListener("squeeze",Y),n.removeEventListener("squeezestart",Y),n.removeEventListener("squeezeend",Y),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",$);for(let Z=0;Z<w.length;Z++){let Q=T[Z];Q!==null&&(T[Z]=null,w[Z].disconnect(Q))}H=null,G=null,m.reset();for(let Z in f)delete f[Z];t.setRenderTarget(E),p=null,d=null,u=null,n=null,x=null,ee.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(E=t.getRenderTarget(),n.addEventListener("select",Y),n.addEventListener("selectstart",Y),n.addEventListener("selectend",Y),n.addEventListener("squeeze",Y),n.addEventListener("squeezestart",Y),n.addEventListener("squeezeend",Y),n.addEventListener("end",W),n.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Nt=null,Tt=null;v.depth&&(Tt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=v.stencil?ns:Vn,Nt=v.stencil?is:en);let Kt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Kt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new He(d.textureWidth,d.textureHeight,{format:hi,type:xi,depthTexture:new Ps(d.textureWidth,d.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let mt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,e,mt),n.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new He(p.framebufferWidth,p.framebufferHeight,{format:hi,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),ee.setContext(n),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(Z){for(let Q=0;Q<Z.removed.length;Q++){let mt=Z.removed[Q],Nt=T.indexOf(mt);Nt>=0&&(T[Nt]=null,w[Nt].disconnect(mt))}for(let Q=0;Q<Z.added.length;Q++){let mt=Z.added[Q],Nt=T.indexOf(mt);if(Nt===-1){for(let Kt=0;Kt<w.length;Kt++)if(Kt>=T.length){T.push(mt),Nt=Kt;break}else if(T[Kt]===null){T[Kt]=mt,Nt=Kt;break}if(Nt===-1)break}let Tt=w[Nt];Tt&&Tt.connect(mt)}}let V=new R,rt=new R;function ht(Z,Q,mt){V.setFromMatrixPosition(Q.matrixWorld),rt.setFromMatrixPosition(mt.matrixWorld);let Nt=V.distanceTo(rt),Tt=Q.projectionMatrix.elements,Kt=mt.projectionMatrix.elements,Oe=Tt[14]/(Tt[10]-1),I=Tt[14]/(Tt[10]+1),me=(Tt[9]+1)/Tt[5],Ot=(Tt[9]-1)/Tt[5],Dt=(Tt[8]-1)/Tt[0],_t=(Kt[8]+1)/Kt[0],ge=Oe*Dt,yt=Oe*_t,Vt=Nt/(-Dt+_t),De=Vt*-Dt;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(De),Z.translateZ(Vt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Tt[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Ee=Oe+Vt,A=I+Vt,y=ge-De,B=yt+(Nt-De),q=me*I/A*Ee,J=Ot*I/A*Ee;Z.projectionMatrix.makePerspective(y,B,q,J,Ee,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function St(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let Q=Z.near,mt=Z.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),F.near=b.near=S.near=Q,F.far=b.far=S.far=mt,(H!==F.near||G!==F.far)&&(n.updateRenderState({depthNear:F.near,depthFar:F.far}),H=F.near,G=F.far),F.layers.mask=Z.layers.mask|6,S.layers.mask=F.layers.mask&3,b.layers.mask=F.layers.mask&5;let Nt=Z.parent,Tt=F.cameras;St(F,Nt);for(let Kt=0;Kt<Tt.length;Kt++)St(Tt[Kt],Nt);Tt.length===2?ht(F,S,b):F.projectionMatrix.copy(S.projectionMatrix),Wt(Z,F,Nt)};function Wt(Z,Q,mt){mt===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Gn*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Z){return f[Z]};let le=null;function pe(Z,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){let mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let Nt=!1;mt.length!==F.cameras.length&&(F.cameras.length=0,Nt=!0);for(let I=0;I<mt.length;I++){let me=mt[I],Ot=null;if(p!==null)Ot=p.getViewport(me);else{let _t=u.getViewSubImage(d,me);Ot=_t.viewport,I===0&&(t.setRenderTargetTextures(x,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(x))}let Dt=L[I];Dt===void 0&&(Dt=new Fe,Dt.layers.enable(I),Dt.viewport=new se,L[I]=Dt),Dt.matrix.fromArray(me.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(me.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),I===0&&(F.matrix.copy(Dt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Nt===!0&&F.cameras.push(Dt)}let Tt=n.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let I=u.getDepthInformation(mt[0]);I&&I.isValid&&I.texture&&m.init(I,n.renderState)}if(Tt&&Tt.includes("camera-access")&&_){t.state.unbindTexture(),u=i.getBinding();for(let I=0;I<mt.length;I++){let me=mt[I].camera;if(me){let Ot=f[me];Ot||(Ot=new Ls,f[me]=Ot);let Dt=u.getCameraImage(me);Ot.sourceTexture=Dt}}}}for(let mt=0;mt<w.length;mt++){let Nt=T[mt],Tt=w[mt];Nt!==null&&Tt!==void 0&&Tt.update(Nt,Q,l||a)}le&&le(Z,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}let ee=new xh;ee.setAnimationLoop(pe),this.setAnimationLoop=function(Z){le=Z},this.dispose=function(){}}},En=new ti,og=new he;function lg(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,el(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,v,E,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,v,E):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Be&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Be&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=t.get(f),E=v.envMap,x=v.envMapRotation;E&&(m.envMap.value=E,En.copy(x),En.x*=-1,En.y*=-1,En.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),m.envMapRotation.value.setFromMatrix4(og.makeRotationFromEuler(En)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,v,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Be&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function cg(s,t,e,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,E){let x=E.program;i.uniformBlockBinding(v,x)}function l(v,E){let x=n[v.id];x===void 0&&(g(v),x=h(v),n[v.id]=x,v.addEventListener("dispose",m));let w=E.program;i.updateUBOMapping(v,w);let T=t.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function h(v){let E=u();v.__bindingPointIndex=E;let x=s.createBuffer(),w=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,w,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,x),x}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let E=n[v.id],x=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let T=0,C=x.length;T<C;T++){let P=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,b=P.length;S<b;S++){let L=P[S];if(p(L,T,S,w)===!0){let F=L.__offset,H=Array.isArray(L.value)?L.value:[L.value],G=0;for(let Y=0;Y<H.length;Y++){let W=H[Y],$=_(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,F+G,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,E,x,w){let T=v.value,C=E+"_"+x;if(w[C]===void 0)return typeof T=="number"||typeof T=="boolean"?w[C]=T:w[C]=T.clone(),!0;{let P=w[C];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return w[C]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(v){let E=v.uniforms,x=0,w=16;for(let C=0,P=E.length;C<P;C++){let S=Array.isArray(E[C])?E[C]:[E[C]];for(let b=0,L=S.length;b<L;b++){let F=S[b],H=Array.isArray(F.value)?F.value:[F.value];for(let G=0,Y=H.length;G<Y;G++){let W=H[G],$=_(W),V=x%w,rt=V%$.boundary,ht=V+rt;x+=rt,ht!==0&&w-ht<$.storage&&(x+=w-ht),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=$.storage}}}let T=x%w;return T>0&&(x+=w-T),v.__size=x,v.__cache={},this}function _(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),E}function m(v){let E=v.target;E.removeEventListener("dispose",m);let x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(n[E.id]),delete n[E.id],delete r[E.id]}function f(){for(let v in n)s.deleteBuffer(n[v]);a=[],n={},r={}}return{bind:c,update:l,dispose:f}}var Va=class{constructor(t={}){let{canvas:e=Wc(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,v=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,w=!1;this._outputColorSpace=Xe;let T=0,C=0,P=null,S=-1,b=null,L=new se,F=new se,H=null,G=new Rt(0),Y=0,W=e.width,$=e.height,V=1,rt=null,ht=null,St=new se(0,0,W,$),Wt=new se(0,0,W,$),le=!1,pe=new Zn,ee=!1,Z=!1,Q=new he,mt=new R,Nt=new se,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function Oe(){return P===null?V:1}let I=i;function me(M,U){return e.getContext(M,U)}try{let M={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",j,!1),I===null){let U="webgl2";if(I=me(U,M),I===null)throw me(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ot,Dt,_t,ge,yt,Vt,De,Ee,A,y,B,q,J,X,Et,nt,vt,Mt,et,ct,Pt,bt,ot,zt;function D(){Ot=new Ap(I),Ot.init(),bt=new sg(I,Ot),Dt=new vp(I,Ot,t,bt),_t=new ig(I,Ot),Dt.reversedDepthBuffer&&d&&_t.buffers.depth.setReversed(!0),ge=new Ip(I),yt=new Gm,Vt=new ng(I,Ot,_t,yt,Dt,bt,ge),De=new bp(x),Ee=new wp(x),A=new Nu(I),ot=new _p(I,A),y=new Rp(I,A,ge,ot),B=new Lp(I,y,A,ge),et=new Pp(I,Dt,Vt),nt=new Mp(yt),q=new Vm(x,De,Ee,Ot,Dt,ot,nt),J=new lg(x,yt),X=new Xm,Et=new Jm(Ot),Mt=new xp(x,De,Ee,_t,B,p,c),vt=new tg(x,B,Dt),zt=new cg(I,ge,Dt,_t),ct=new yp(I,Ot,ge),Pt=new Cp(I,Ot,ge),ge.programs=q.programs,x.capabilities=Dt,x.extensions=Ot,x.properties=yt,x.renderLists=X,x.shadowMap=vt,x.state=_t,x.info=ge}D();let it=new _l(x,I);this.xr=it,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let M=Ot.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ot.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(W,$,!1))},this.getSize=function(M){return M.set(W,$)},this.setSize=function(M,U,O=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,$=U,e.width=Math.floor(M*V),e.height=Math.floor(U*V),O===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(W*V,$*V).floor()},this.setDrawingBufferSize=function(M,U,O){W=M,$=U,V=O,e.width=Math.floor(M*O),e.height=Math.floor(U*O),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(St)},this.setViewport=function(M,U,O,k){M.isVector4?St.set(M.x,M.y,M.z,M.w):St.set(M,U,O,k),_t.viewport(L.copy(St).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(Wt)},this.setScissor=function(M,U,O,k){M.isVector4?Wt.set(M.x,M.y,M.z,M.w):Wt.set(M,U,O,k),_t.scissor(F.copy(Wt).multiplyScalar(V).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(M){_t.setScissorTest(le=M)},this.setOpaqueSort=function(M){rt=M},this.setTransparentSort=function(M){ht=M},this.getClearColor=function(M){return M.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,O=!0){let k=0;if(M){let N=!1;if(P!==null){let tt=P.texture.format;N=tt===la||tt===oa||tt===aa}if(N){let tt=P.texture.type,lt=tt===xi||tt===en||tt===es||tt===is||tt===sa||tt===ra,gt=Mt.getClearColor(),dt=Mt.getClearAlpha(),It=gt.r,Ut=gt.g,At=gt.b;lt?(g[0]=It,g[1]=Ut,g[2]=At,g[3]=dt,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=It,_[1]=Ut,_[2]=At,_[3]=dt,I.clearBufferiv(I.COLOR,0,_))}else k|=I.COLOR_BUFFER_BIT}U&&(k|=I.DEPTH_BUFFER_BIT),O&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",j,!1),Mt.dispose(),X.dispose(),Et.dispose(),yt.dispose(),De.dispose(),Ee.dispose(),B.dispose(),ot.dispose(),zt.dispose(),q.dispose(),it.dispose(),it.removeEventListener("sessionstart",yi),it.removeEventListener("sessionend",Dl),an.stop()};function st(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let M=ge.autoReset,U=vt.enabled,O=vt.autoUpdate,k=vt.needsUpdate,N=vt.type;D(),ge.autoReset=M,vt.enabled=U,vt.autoUpdate=O,vt.needsUpdate=k,vt.type=N}function j(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function K(M){let U=M.target;U.removeEventListener("dispose",K),xt(U)}function xt(M){Ft(M),yt.remove(M)}function Ft(M){let U=yt.get(M).programs;U!==void 0&&(U.forEach(function(O){q.releaseProgram(O)}),M.isShaderMaterial&&q.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,O,k,N,tt){U===null&&(U=Tt);let lt=N.isMesh&&N.matrixWorld.determinant()<0,gt=Ch(M,U,O,k,N);_t.setMaterial(k,lt);let dt=O.index,It=1;if(k.wireframe===!0){if(dt=y.getWireframeAttribute(O),dt===void 0)return;It=2}let Ut=O.drawRange,At=O.attributes.position,qt=Ut.start*It,re=(Ut.start+Ut.count)*It;tt!==null&&(qt=Math.max(qt,tt.start*It),re=Math.min(re,(tt.start+tt.count)*It)),dt!==null?(qt=Math.max(qt,0),re=Math.min(re,dt.count)):At!=null&&(qt=Math.max(qt,0),re=Math.min(re,At.count));let ve=re-qt;if(ve<0||ve===1/0)return;ot.setup(N,k,gt,O,dt);let ue,ae=ct;if(dt!==null&&(ue=A.get(dt),ae=Pt,ae.setIndex(ue)),N.isMesh)k.wireframe===!0?(_t.setLineWidth(k.wireframeLinewidth*Oe()),ae.setMode(I.LINES)):ae.setMode(I.TRIANGLES);else if(N.isLine){let Ct=k.linewidth;Ct===void 0&&(Ct=1),_t.setLineWidth(Ct*Oe()),N.isLineSegments?ae.setMode(I.LINES):N.isLineLoop?ae.setMode(I.LINE_LOOP):ae.setMode(I.LINE_STRIP)}else N.isPoints?ae.setMode(I.POINTS):N.isSprite&&ae.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Wn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))ae.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ct=N._multiDrawStarts,_e=N._multiDrawCounts,Jt=N._multiDrawCount,Ze=dt?A.get(dt).bytesPerElement:1,An=yt.get(k).currentProgram.getUniforms();for(let Ke=0;Ke<Jt;Ke++)An.setValue(I,"_gl_DrawID",Ke),ae.render(Ct[Ke]/Ze,_e[Ke])}else if(N.isInstancedMesh)ae.renderInstances(qt,ve,N.count);else if(O.isInstancedBufferGeometry){let Ct=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,_e=Math.min(O.instanceCount,Ct);ae.renderInstances(qt,ve,_e)}else ae.render(qt,ve)};function ce(M,U,O){M.transparent===!0&&M.side===qe&&M.forceSinglePass===!1?(M.side=Be,M.needsUpdate=!0,$s(M,U,O),M.side=Ui,M.needsUpdate=!0,$s(M,U,O),M.side=qe):$s(M,U,O)}this.compile=function(M,U,O=null){O===null&&(O=M),f=Et.get(O),f.init(U),E.push(f),O.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),M!==O&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let k=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let tt=N.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){let gt=tt[lt];ce(gt,O,N),k.add(gt)}else ce(tt,O,N),k.add(tt)}),f=E.pop(),k},this.compileAsync=function(M,U,O=null){let k=this.compile(M,U,O);return new Promise(N=>{function tt(){if(k.forEach(function(lt){yt.get(lt).currentProgram.isReady()&&k.delete(lt)}),k.size===0){N(M);return}setTimeout(tt,10)}Ot.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let ie=null;function Ai(M){ie&&ie(M)}function yi(){an.stop()}function Dl(){an.start()}let an=new xh;an.setAnimationLoop(Ai),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(M){ie=M,it.setAnimationLoop(M),M===null?an.stop():an.start()},it.addEventListener("sessionstart",yi),it.addEventListener("sessionend",Dl),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(U),U=it.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,U,P),f=Et.get(M,E.length),f.init(U),E.push(f),Q.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),pe.setFromProjectionMatrix(Q,pi,U.reversedDepth),Z=this.localClippingEnabled,ee=nt.init(this.clippingPlanes,Z),m=X.get(M,v.length),m.init(),v.push(m),it.enabled===!0&&it.isPresenting===!0){let tt=x.xr.getDepthSensingMesh();tt!==null&&to(tt,U,-1/0,x.sortObjects)}to(M,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(rt,ht),Kt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Kt&&Mt.addToRenderList(m,M),this.info.render.frame++,ee===!0&&nt.beginShadows();let O=f.state.shadowsArray;vt.render(O,M,U),ee===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){let tt=U.cameras;if(N.length>0)for(let lt=0,gt=tt.length;lt<gt;lt++){let dt=tt[lt];Nl(k,N,M,dt)}Kt&&Mt.render(M);for(let lt=0,gt=tt.length;lt<gt;lt++){let dt=tt[lt];Ul(m,M,dt,dt.viewport)}}else N.length>0&&Nl(k,N,M,U),Kt&&Mt.render(M),Ul(m,M,U);P!==null&&C===0&&(Vt.updateMultisampleRenderTarget(P),Vt.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(x,M,U),ot.resetDefaultState(),S=-1,b=null,E.pop(),E.length>0?(f=E[E.length-1],ee===!0&&nt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function to(M,U,O,k){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||pe.intersectsSprite(M)){k&&Nt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Q);let lt=B.update(M),gt=M.material;gt.visible&&m.push(M,lt,gt,O,Nt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||pe.intersectsObject(M))){let lt=B.update(M),gt=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Nt.copy(M.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Nt.copy(lt.boundingSphere.center)),Nt.applyMatrix4(M.matrixWorld).applyMatrix4(Q)),Array.isArray(gt)){let dt=lt.groups;for(let It=0,Ut=dt.length;It<Ut;It++){let At=dt[It],qt=gt[At.materialIndex];qt&&qt.visible&&m.push(M,lt,qt,O,Nt.z,At)}}else gt.visible&&m.push(M,lt,gt,O,Nt.z,null)}}let tt=M.children;for(let lt=0,gt=tt.length;lt<gt;lt++)to(tt[lt],U,O,k)}function Ul(M,U,O,k){let N=M.opaque,tt=M.transmissive,lt=M.transparent;f.setupLightsView(O),ee===!0&&nt.setGlobalState(x.clippingPlanes,O),k&&_t.viewport(L.copy(k)),N.length>0&&Ks(N,U,O),tt.length>0&&Ks(tt,U,O),lt.length>0&&Ks(lt,U,O),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Nl(M,U,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new He(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?ci:xi,minFilter:tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let tt=f.state.transmissionRenderTarget[k.id],lt=k.viewport||L;tt.setSize(lt.z*x.transmissionResolutionScale,lt.w*x.transmissionResolutionScale);let gt=x.getRenderTarget(),dt=x.getActiveCubeFace(),It=x.getActiveMipmapLevel();x.setRenderTarget(tt),x.getClearColor(G),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Kt&&Mt.render(O);let Ut=x.toneMapping;x.toneMapping=Bi;let At=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),ee===!0&&nt.setGlobalState(x.clippingPlanes,k),Ks(M,O,k),Vt.updateMultisampleRenderTarget(tt),Vt.updateRenderTargetMipmap(tt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let re=0,ve=U.length;re<ve;re++){let ue=U[re],ae=ue.object,Ct=ue.geometry,_e=ue.material,Jt=ue.group;if(_e.side===qe&&ae.layers.test(k.layers)){let Ze=_e.side;_e.side=Be,_e.needsUpdate=!0,Fl(ae,O,k,Ct,_e,Jt),_e.side=Ze,_e.needsUpdate=!0,qt=!0}}qt===!0&&(Vt.updateMultisampleRenderTarget(tt),Vt.updateRenderTargetMipmap(tt))}x.setRenderTarget(gt,dt,It),x.setClearColor(G,Y),At!==void 0&&(k.viewport=At),x.toneMapping=Ut}function Ks(M,U,O){let k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,tt=M.length;N<tt;N++){let lt=M[N],gt=lt.object,dt=lt.geometry,It=lt.group,Ut=lt.material;Ut.allowOverride===!0&&k!==null&&(Ut=k),gt.layers.test(O.layers)&&Fl(gt,U,O,dt,Ut,It)}}function Fl(M,U,O,k,N,tt){M.onBeforeRender(x,U,O,k,N,tt),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(x,U,O,k,M,tt),N.transparent===!0&&N.side===qe&&N.forceSinglePass===!1?(N.side=Be,N.needsUpdate=!0,x.renderBufferDirect(O,U,k,N,M,tt),N.side=Ui,N.needsUpdate=!0,x.renderBufferDirect(O,U,k,N,M,tt),N.side=qe):x.renderBufferDirect(O,U,k,N,M,tt),M.onAfterRender(x,U,O,k,N,tt)}function $s(M,U,O){U.isScene!==!0&&(U=Tt);let k=yt.get(M),N=f.state.lights,tt=f.state.shadowsArray,lt=N.state.version,gt=q.getParameters(M,N.state,tt,U,O),dt=q.getProgramCacheKey(gt),It=k.programs;k.environment=M.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(M.isMeshStandardMaterial?Ee:De).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,It===void 0&&(M.addEventListener("dispose",K),It=new Map,k.programs=It);let Ut=It.get(dt);if(Ut!==void 0){if(k.currentProgram===Ut&&k.lightsStateVersion===lt)return Ol(M,gt),Ut}else gt.uniforms=q.getUniforms(M),M.onBeforeCompile(gt,x),Ut=q.acquireProgram(gt,dt),It.set(dt,Ut),k.uniforms=gt.uniforms;let At=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(At.clippingPlanes=nt.uniform),Ol(M,gt),k.needsLights=Ph(M),k.lightsStateVersion=lt,k.needsLights&&(At.ambientLightColor.value=N.state.ambient,At.lightProbe.value=N.state.probe,At.directionalLights.value=N.state.directional,At.directionalLightShadows.value=N.state.directionalShadow,At.spotLights.value=N.state.spot,At.spotLightShadows.value=N.state.spotShadow,At.rectAreaLights.value=N.state.rectArea,At.ltc_1.value=N.state.rectAreaLTC1,At.ltc_2.value=N.state.rectAreaLTC2,At.pointLights.value=N.state.point,At.pointLightShadows.value=N.state.pointShadow,At.hemisphereLights.value=N.state.hemi,At.directionalShadowMap.value=N.state.directionalShadowMap,At.directionalShadowMatrix.value=N.state.directionalShadowMatrix,At.spotShadowMap.value=N.state.spotShadowMap,At.spotLightMatrix.value=N.state.spotLightMatrix,At.spotLightMap.value=N.state.spotLightMap,At.pointShadowMap.value=N.state.pointShadowMap,At.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Ut,k.uniformsList=null,Ut}function Bl(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=os.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Ol(M,U){let O=yt.get(M);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Ch(M,U,O,k,N){U.isScene!==!0&&(U=Tt),Vt.resetTextureUnits();let tt=U.fog,lt=k.isMeshStandardMaterial?U.environment:null,gt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:mn,dt=(k.isMeshStandardMaterial?Ee:De).get(k.envMap||lt),It=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ut=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),At=!!O.morphAttributes.position,qt=!!O.morphAttributes.normal,re=!!O.morphAttributes.color,ve=Bi;k.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ve=x.toneMapping);let ue=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ae=ue!==void 0?ue.length:0,Ct=yt.get(k),_e=f.state.lights;if(ee===!0&&(Z===!0||M!==b)){let Ge=M===b&&k.id===S;nt.setState(k,M,Ge)}let Jt=!1;k.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==_e.state.version||Ct.outputColorSpace!==gt||N.isBatchedMesh&&Ct.batching===!1||!N.isBatchedMesh&&Ct.batching===!0||N.isBatchedMesh&&Ct.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ct.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ct.instancing===!1||!N.isInstancedMesh&&Ct.instancing===!0||N.isSkinnedMesh&&Ct.skinning===!1||!N.isSkinnedMesh&&Ct.skinning===!0||N.isInstancedMesh&&Ct.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ct.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ct.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ct.instancingMorph===!1&&N.morphTexture!==null||Ct.envMap!==dt||k.fog===!0&&Ct.fog!==tt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==nt.numPlanes||Ct.numIntersection!==nt.numIntersection)||Ct.vertexAlphas!==It||Ct.vertexTangents!==Ut||Ct.morphTargets!==At||Ct.morphNormals!==qt||Ct.morphColors!==re||Ct.toneMapping!==ve||Ct.morphTargetsCount!==ae)&&(Jt=!0):(Jt=!0,Ct.__version=k.version);let Ze=Ct.currentProgram;Jt===!0&&(Ze=$s(k,U,N));let An=!1,Ke=!1,ds=!1,ye=Ze.getUniforms(),si=Ct.uniforms;if(_t.useProgram(Ze.program)&&(An=!0,Ke=!0,ds=!0),k.id!==S&&(S=k.id,Ke=!0),An||b!==M){_t.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ye.setValue(I,"projectionMatrix",M.projectionMatrix),ye.setValue(I,"viewMatrix",M.matrixWorldInverse);let Ye=ye.map.cameraPosition;Ye!==void 0&&Ye.setValue(I,mt.setFromMatrixPosition(M.matrixWorld)),Dt.logarithmicDepthBuffer&&ye.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ye.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Ke=!0,ds=!0)}if(N.isSkinnedMesh){ye.setOptional(I,N,"bindMatrix"),ye.setOptional(I,N,"bindMatrixInverse");let Ge=N.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),ye.setValue(I,"boneTexture",Ge.boneTexture,Vt))}N.isBatchedMesh&&(ye.setOptional(I,N,"batchingTexture"),ye.setValue(I,"batchingTexture",N._matricesTexture,Vt),ye.setOptional(I,N,"batchingIdTexture"),ye.setValue(I,"batchingIdTexture",N._indirectTexture,Vt),ye.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&ye.setValue(I,"batchingColorTexture",N._colorsTexture,Vt));let ri=O.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&et.update(N,O,Ze),(Ke||Ct.receiveShadow!==N.receiveShadow)&&(Ct.receiveShadow=N.receiveShadow,ye.setValue(I,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(si.envMap.value=dt,si.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(si.envMapIntensity.value=U.environmentIntensity),Ke&&(ye.setValue(I,"toneMappingExposure",x.toneMappingExposure),Ct.needsLights&&Ih(si,ds),tt&&k.fog===!0&&J.refreshFogUniforms(si,tt),J.refreshMaterialUniforms(si,k,V,$,f.state.transmissionRenderTarget[M.id]),os.upload(I,Bl(Ct),si,Vt)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(os.upload(I,Bl(Ct),si,Vt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ye.setValue(I,"center",N.center),ye.setValue(I,"modelViewMatrix",N.modelViewMatrix),ye.setValue(I,"normalMatrix",N.normalMatrix),ye.setValue(I,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Ge=k.uniformsGroups;for(let Ye=0,eo=Ge.length;Ye<eo;Ye++){let on=Ge[Ye];zt.update(on,Ze),zt.bind(on,Ze)}}return Ze}function Ih(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Ph(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,U,O){let k=yt.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),yt.get(M.texture).__webglTexture=U,yt.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:O,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let O=yt.get(M);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0};let Lh=I.createFramebuffer();this.setRenderTarget=function(M,U=0,O=0){P=M,T=U,C=O;let k=!0,N=null,tt=!1,lt=!1;if(M){let dt=yt.get(M);if(dt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(I.FRAMEBUFFER,null),k=!1;else if(dt.__webglFramebuffer===void 0)Vt.setupRenderTarget(M);else if(dt.__hasExternalTextures)Vt.rebindTextures(M,yt.get(M.texture).__webglTexture,yt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let At=M.depthTexture;if(dt.__boundDepthTexture!==At){if(At!==null&&yt.has(At)&&(M.width!==At.image.width||M.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(M)}}let It=M.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(lt=!0);let Ut=yt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?N=Ut[U][O]:N=Ut[U],tt=!0):M.samples>0&&Vt.useMultisampledRTT(M)===!1?N=yt.get(M).__webglMultisampledFramebuffer:Array.isArray(Ut)?N=Ut[O]:N=Ut,L.copy(M.viewport),F.copy(M.scissor),H=M.scissorTest}else L.copy(St).multiplyScalar(V).floor(),F.copy(Wt).multiplyScalar(V).floor(),H=le;if(O!==0&&(N=Lh),_t.bindFramebuffer(I.FRAMEBUFFER,N)&&k&&_t.drawBuffers(M,N),_t.viewport(L),_t.scissor(F),_t.setScissorTest(H),tt){let dt=yt.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,dt.__webglTexture,O)}else if(lt){let dt=U;for(let It=0;It<M.textures.length;It++){let Ut=yt.get(M.textures[It]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+It,Ut.__webglTexture,O,dt)}}else if(M!==null&&O!==0){let dt=yt.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dt.__webglTexture,O)}S=-1},this.readRenderTargetPixels=function(M,U,O,k,N,tt,lt,gt=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=yt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&lt!==void 0&&(dt=dt[lt]),dt){_t.bindFramebuffer(I.FRAMEBUFFER,dt);try{let It=M.textures[gt],Ut=It.format,At=It.type;if(!Dt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-k&&O>=0&&O<=M.height-N&&(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+gt),I.readPixels(U,O,k,N,bt.convert(Ut),bt.convert(At),tt))}finally{let It=P!==null?yt.get(P).__webglFramebuffer:null;_t.bindFramebuffer(I.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(M,U,O,k,N,tt,lt,gt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=yt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&lt!==void 0&&(dt=dt[lt]),dt)if(U>=0&&U<=M.width-k&&O>=0&&O<=M.height-N){_t.bindFramebuffer(I.FRAMEBUFFER,dt);let It=M.textures[gt],Ut=It.format,At=It.type;if(!Dt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,qt),I.bufferData(I.PIXEL_PACK_BUFFER,tt.byteLength,I.STREAM_READ),M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+gt),I.readPixels(U,O,k,N,bt.convert(Ut),bt.convert(At),0);let re=P!==null?yt.get(P).__webglFramebuffer:null;_t.bindFramebuffer(I.FRAMEBUFFER,re);let ve=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Xc(I,ve,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,qt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,tt),I.deleteBuffer(qt),I.deleteSync(ve),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,O=0){let k=Math.pow(2,-O),N=Math.floor(M.image.width*k),tt=Math.floor(M.image.height*k),lt=U!==null?U.x:0,gt=U!==null?U.y:0;Vt.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,O,0,0,lt,gt,N,tt),_t.unbindTexture()};let Dh=I.createFramebuffer(),Uh=I.createFramebuffer();this.copyTextureToTexture=function(M,U,O=null,k=null,N=0,tt=null){tt===null&&(N!==0?(Wn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=N,N=0):tt=0);let lt,gt,dt,It,Ut,At,qt,re,ve,ue=M.isCompressedTexture?M.mipmaps[tt]:M.image;if(O!==null)lt=O.max.x-O.min.x,gt=O.max.y-O.min.y,dt=O.isBox3?O.max.z-O.min.z:1,It=O.min.x,Ut=O.min.y,At=O.isBox3?O.min.z:0;else{let ri=Math.pow(2,-N);lt=Math.floor(ue.width*ri),gt=Math.floor(ue.height*ri),M.isDataArrayTexture?dt=ue.depth:M.isData3DTexture?dt=Math.floor(ue.depth*ri):dt=1,It=0,Ut=0,At=0}k!==null?(qt=k.x,re=k.y,ve=k.z):(qt=0,re=0,ve=0);let ae=bt.convert(U.format),Ct=bt.convert(U.type),_e;U.isData3DTexture?(Vt.setTexture3D(U,0),_e=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Vt.setTexture2DArray(U,0),_e=I.TEXTURE_2D_ARRAY):(Vt.setTexture2D(U,0),_e=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let Jt=I.getParameter(I.UNPACK_ROW_LENGTH),Ze=I.getParameter(I.UNPACK_IMAGE_HEIGHT),An=I.getParameter(I.UNPACK_SKIP_PIXELS),Ke=I.getParameter(I.UNPACK_SKIP_ROWS),ds=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ue.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ue.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,It),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ut),I.pixelStorei(I.UNPACK_SKIP_IMAGES,At);let ye=M.isDataArrayTexture||M.isData3DTexture,si=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let ri=yt.get(M),Ge=yt.get(U),Ye=yt.get(ri.__renderTarget),eo=yt.get(Ge.__renderTarget);_t.bindFramebuffer(I.READ_FRAMEBUFFER,Ye.__webglFramebuffer),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,eo.__webglFramebuffer);for(let on=0;on<dt;on++)ye&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(M).__webglTexture,N,At+on),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(U).__webglTexture,tt,ve+on)),I.blitFramebuffer(It,Ut,lt,gt,qt,re,lt,gt,I.DEPTH_BUFFER_BIT,I.NEAREST);_t.bindFramebuffer(I.READ_FRAMEBUFFER,null),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||yt.has(M)){let ri=yt.get(M),Ge=yt.get(U);_t.bindFramebuffer(I.READ_FRAMEBUFFER,Dh),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,Uh);for(let Ye=0;Ye<dt;Ye++)ye?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ri.__webglTexture,N,At+Ye):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ri.__webglTexture,N),si?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ge.__webglTexture,tt,ve+Ye):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ge.__webglTexture,tt),N!==0?I.blitFramebuffer(It,Ut,lt,gt,qt,re,lt,gt,I.COLOR_BUFFER_BIT,I.NEAREST):si?I.copyTexSubImage3D(_e,tt,qt,re,ve+Ye,It,Ut,lt,gt):I.copyTexSubImage2D(_e,tt,qt,re,It,Ut,lt,gt);_t.bindFramebuffer(I.READ_FRAMEBUFFER,null),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else si?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(_e,tt,qt,re,ve,lt,gt,dt,ae,Ct,ue.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(_e,tt,qt,re,ve,lt,gt,dt,ae,ue.data):I.texSubImage3D(_e,tt,qt,re,ve,lt,gt,dt,ae,Ct,ue):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,tt,qt,re,lt,gt,ae,Ct,ue.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,tt,qt,re,ue.width,ue.height,ae,ue.data):I.texSubImage2D(I.TEXTURE_2D,tt,qt,re,lt,gt,ae,Ct,ue);I.pixelStorei(I.UNPACK_ROW_LENGTH,Jt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ze),I.pixelStorei(I.UNPACK_SKIP_PIXELS,An),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ke),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ds),tt===0&&U.generateMipmaps&&I.generateMipmap(_e),_t.unbindTexture()},this.initRenderTarget=function(M){yt.get(M).__webglFramebuffer===void 0&&Vt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Vt.setTextureCube(M,0):M.isData3DTexture?Vt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Vt.setTexture2DArray(M,0):Vt.setTexture2D(M,0),_t.unbindTexture()},this.resetState=function(){T=0,C=0,P=null,_t.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var cs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ii=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ug=new yn(-1,1,1,-1,0,1),vl=class extends Me{constructor(){super(),this.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new te([0,2,0,0,2,0],2))}},dg=new vl,nn=class{constructor(t){this._mesh=new xe(dg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ug)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Wa=class extends ii{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ki.clone(t.uniforms),this.material=new be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new nn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ys=class extends ii{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},Xa=class extends ii{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var qa=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new wt);this._width=i.width,this._height=i.height,e=new He(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ci}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wa(cs),this.copyPass.material.blending=gi,this.clock=new Os}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ys!==void 0&&(a instanceof Ys?i=!0:a instanceof Xa&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new wt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ya=class extends ii{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Rt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}};var bh={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Rt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var hs=class s extends ii{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new wt(t.x,t.y):new wt(256,256),this.clearColor=new Rt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new He(r,a,{type:ci}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new He(r,a,{type:ci});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new He(r,a,{type:ci});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=bh;this.highPassUniforms=ki.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new be({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new wt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ki.clone(cs.uniforms),this.blendMaterial=new be({uniforms:this.copyUniforms,vertexShader:cs.vertexShader,fragmentShader:cs.fragmentShader,blending:oe,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Rt,this._oldClearAlpha=1,this._basic=new Qt,this._fsQuad=new nn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new wt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new be({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new wt(.5,.5)},direction:{value:new wt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new be({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};hs.BlurDirectionX=new wt(1,0);hs.BlurDirectionY=new wt(0,1);var Zs={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Za=class extends ii{constructor(){super(),this.uniforms=ki.clone(Zs.uniforms),this.material=new Ns({name:Zs.name,uniforms:this.uniforms,vertexShader:Zs.vertexShader,fragmentShader:Zs.fragmentShader}),this._fsQuad=new nn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Yt.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$r?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ts?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Jr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Eh(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new Me,l=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let p=s[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Sh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let _=0;_<a[h].length;++_)p.push(a[h][_][d]);let g=Sh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Sh(s){let t,e,i,n=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Re(a,e,i),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<e;g++){let _=h.getComponent(d,g);o.setComponent(d+u,g,_)}}else a.set(h.array,c);c+=h.count*e}return n!==void 0&&(o.gpuType=n),o}var ut=s=>document.querySelector(s),Bt=Ba.clamp,Rh=Ba.lerp,Zt=(s,t,e,i)=>Rh(s,t,1-Math.exp(-e*i)),pt=(s,t)=>s+Math.random()*(t-s),ni=()=>new R,us=new R(0,0,-1),Qa=new R(0,1,0),Ml=new R(1,0,0),Te=ni(),zi=ni(),sn=ni(),rn=ni(),$a=ni(),wi=new Qe,Ka=new Qe,Th=new he,_i=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0&&!matchMedia("(hover:hover) and (pointer:fine)").matches,wh=0,Ah=0;function Ja(){let s=window.visualViewport,t=Math.max(1,Math.round(s?.width||innerWidth)),e=Math.max(1,Math.round(s?.height||innerHeight)),i=_i?2.5:1/0,n=Math.min(t,Math.round(e*i)),r=Math.round((t-n)/2),a=t!==wh||e!==Ah;if(a){wh=t,Ah=e;let o=document.documentElement;o.style.setProperty("--app-w",t+"px"),o.style.setProperty("--app-h",e+"px"),document.body?.classList.toggle("mobile-cramped",_i&&(e<=300||t/e>=3))}return{width:t,height:e,renderWidth:n,left:r,changed:a}}var bl=class{constructor(t,e){this.canvas=t,this.game=e,this.keys=new Set,this.mobileKeys=new Set,this.mobileEnabled=_i,this.mobilePortrait=!1,this.touchThrottle=0,this.touchStrafe=0,this.fire=!1,this.missile=!1,this.boostMouse=!1,this.aimX=0,this.aimY=0,this.dx=0,this.dy=0,this.lookDX=0,this.lookDY=0,this.fallbackX=0,this.fallbackY=0,this.fallback=!1,this.lastX=null,this.lastY=null,this.pointerWasLocked=!1,document.querySelector("#start")?.addEventListener("pointerdown",()=>this.tryLock()),addEventListener("keydown",i=>{if(this.keys.add(i.code),i.code==="Escape"&&!i.repeat){e.state==="stealth"?e.hideStealth():(e.state==="running"||e.state==="paused")&&e.showStealth(),i.preventDefault();return}i.code==="KeyF"&&!i.repeat&&(this.missile=!0),i.code==="KeyG"&&!i.repeat&&e.upgradeJet(),i.code==="KeyT"&&!i.repeat&&e.cycleWeapon(),i.code==="KeyR"&&(this.aimX=0,this.aimY=0,e.player?.angularVelocity.set(0,0,0)),i.code==="KeyV"&&!i.repeat&&e.toggleCamera(),["Space","Tab","ArrowUp","ArrowDown"].includes(i.code)&&i.preventDefault()}),addEventListener("keyup",i=>this.keys.delete(i.code)),addEventListener("mousemove",i=>{if(!this.mobileEnabled){if(e.state!=="running"){this.lastX=i.clientX,this.lastY=i.clientY;return}document.pointerLockElement===t?(this.dx+=i.movementX||0,this.dy+=i.movementY||0,this.fallback=!1):(this.lastX!==null&&(this.dx+=i.clientX-this.lastX,this.dy+=i.clientY-this.lastY),this.fallback=!0,this.fallbackX=Bt((i.clientX/innerWidth-.5)*2,-1,1),this.fallbackY=Bt((i.clientY/innerHeight-.5)*2,-1,1)),this.lastX=i.clientX,this.lastY=i.clientY}}),addEventListener("mousedown",i=>{this.mobileEnabled||e.state==="running"&&(i.button===0&&(this.fire=!0,e.firePrimary()),i.button===2&&e.cycleWeapon(),document.pointerLockElement!==t&&this.tryLock())}),addEventListener("mouseup",i=>{i.button===0&&(this.fire=!1)}),addEventListener("contextmenu",i=>i.preventDefault()),document.addEventListener("pointerlockchange",()=>{this.mobileEnabled||(document.pointerLockElement===t?(this.pointerWasLocked=!0,this.fallback=!1,this.fallbackX=this.fallbackY=0,this.lastX=this.lastY=null):this.pointerWasLocked&&e.state==="running"&&(this.pointerWasLocked=!1,e.showStealth()))}),document.addEventListener("pointerlockerror",()=>{this.mobileEnabled||(this.fallback=!0)}),addEventListener("unhandledrejection",i=>{!this.mobileEnabled&&/pointer|lock|activation|permission|allowed/i.test(String(i.reason))&&(this.fallback=!0,i.preventDefault())}),this.mobileEnabled&&(document.body.classList.add("mobile-mode"),this.bindMobileUI())}bindMobileUI(){let t=ut("#moveStick"),e=ut("#moveKnob"),i=ut("#touchLook"),n=ut("#touchFire"),r=()=>this.game.audio?.ctx?.resume?.(),a=x=>{x.preventDefault(),x.stopPropagation()},o=null,c=null,l=null,h=0,u=0,d=0,p=0,g=()=>{o=null,this.touchThrottle=this.touchStrafe=0,e&&(e.style.transform="translate(-50%,-50%)")},_=x=>{if(x.pointerId!==o||!t)return;let w=t.getBoundingClientRect(),T=Math.max(24,w.width*.34),C=Bt(x.clientX-(w.left+w.width/2),-T,T),P=Bt(x.clientY-(w.top+w.height/2),-T,T),S=Math.hypot(C,P),b=S>T?T/S:1,L=C*b/T,F=P*b/T,H=.13,G=Y=>Math.abs(Y)<=H?0:Math.sign(Y)*(Math.abs(Y)-H)/(1-H);this.touchStrafe=G(L),this.touchThrottle=-G(F),e&&(e.style.transform=`translate(-50%,-50%) translate(${C*b}px,${P*b}px)`),a(x)};if(t){t.addEventListener("pointerdown",x=>{o=x.pointerId,t.setPointerCapture?.(x.pointerId),r(),_(x),a(x)}),t.addEventListener("pointermove",_);for(let x of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(x,w=>{w.pointerId===o&&(g(),a(w))})}let m=(x,w)=>{this.dx+=Bt(x*1.28,-72,72),this.dy+=Bt(w*1.28,-72,72),this.fallback=!1};if(i){i.addEventListener("pointerdown",x=>{c=x.pointerId,h=x.clientX,u=x.clientY,i.setPointerCapture?.(x.pointerId),r(),a(x)}),i.addEventListener("pointermove",x=>{x.pointerId===c&&(m(x.clientX-h,x.clientY-u),h=x.clientX,u=x.clientY,a(x))});for(let x of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(x,w=>{w.pointerId===c&&(c=null,a(w))})}if(n){n.addEventListener("pointerdown",x=>{this.game.state==="running"&&(l=x.pointerId,d=x.clientX,p=x.clientY,n.setPointerCapture?.(x.pointerId),n.classList.add("active"),r(),this.fire=!0,this.game.firePrimary(),a(x))}),n.addEventListener("pointermove",x=>{x.pointerId===l&&(m(x.clientX-d,x.clientY-p),d=x.clientX,p=x.clientY,a(x))});for(let x of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(x,w=>{w.pointerId===l&&(l=null,this.fire=!1,n.classList.remove("active"),a(w))})}let f=(x,w)=>{let T=ut(x);if(!T)return;let C=null;T.addEventListener("pointerdown",P=>{C=P.pointerId,T.setPointerCapture?.(C),T.classList.add("active"),this.mobileKeys.add(w),r(),a(P)});for(let P of["pointerup","pointercancel","lostpointercapture"])T.addEventListener(P,S=>{S.pointerId===C&&(C=null,T.classList.remove("active"),this.mobileKeys.delete(w),a(S))})};f("#touchBoost","ShiftLeft"),f("#touchShield","Space"),f("#touchUp","KeyC"),f("#touchDown","KeyX"),f("#touchRollL","KeyQ"),f("#touchRollR","KeyE");let v=(x,w)=>{let T=ut(x);if(T){T.addEventListener("pointerdown",C=>{T.classList.add("active"),T.setPointerCapture?.(C.pointerId),r(),w(),a(C)});for(let C of["pointerup","pointercancel","lostpointercapture"])T.addEventListener(C,P=>{T.classList.remove("active"),a(P)})}};v("#touchWeapon",()=>this.game.cycleWeapon()),v("#touchMissile",()=>{this.game.state==="running"&&this.game.fireMissile()}),v("#touchUpgrade",()=>this.game.upgradeJet()),v("#touchCamera",()=>this.game.toggleCamera()),v("#touchFullscreen",()=>this.game.enterImmersive()),v("#touchStealth",()=>this.game.showStealth());for(let x of["touchmove","gesturestart","gesturechange","gestureend"])document.addEventListener(x,w=>{this.game.state!=="stealth"&&w.preventDefault()},{passive:!1});document.addEventListener("dblclick",x=>{this.game.state!=="stealth"&&x.preventDefault()},{passive:!1});let E=()=>this.syncOrientation();E(),addEventListener("orientationchange",E),addEventListener("resize",E),window.visualViewport?.addEventListener?.("resize",E),matchMedia("(orientation:portrait)").addEventListener?.("change",E),window.ResizeObserver&&(this.orientationObserver=new ResizeObserver(E),this.orientationObserver.observe(document.documentElement)),addEventListener("blur",()=>this.clearTouchState()),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.clearTouchState(),this.game.audio?.ctx?.suspend?.()),this.game.last=performance.now(),this.game.acc=0}),addEventListener("pagehide",()=>this.clearTouchState())}syncOrientation(){let t=Ja(),e=t.height>t.width;return t.changed&&this.game?.resize?.(),e===this.mobilePortrait?(document.body.classList.toggle("mobile-portrait",e),!1):(this.mobilePortrait=e,document.body.classList.toggle("mobile-portrait",e),this.clearTouchState(),this.game.acc=0,this.game.last=performance.now(),!0)}clearTouchState(){this.fire=!1,this.missile=!1,this.touchThrottle=this.touchStrafe=0,this.mobileKeys.clear();let t=ut("#moveKnob");t&&(t.style.transform="translate(-50%,-50%)"),document.querySelectorAll("#mobileControls .active").forEach(e=>e.classList.remove("active"))}tryLock(){if(!this.mobileEnabled)try{let t=this.canvas.requestPointerLock?.();t&&typeof t.catch=="function"&&t.catch(()=>{this.fallback=!0})}catch{this.fallback=!0}}key(t){return this.keys.has(t)||this.mobileKeys.has(t)}update(){this.lookDX=Bt(this.dx,-400,400),this.lookDY=Bt(this.dy,-400,400),this.dx=0,this.dy=0,this.aimX*=.72,this.aimY*=.72}reset(){this.keys.clear(),this.clearTouchState(),this.boostMouse=!1,this.aimX=this.aimY=this.dx=this.dy=this.lookDX=this.lookDY=this.fallbackX=this.fallbackY=0,this.fallback=!1,this.lastX=this.lastY=null}},Sl=class{constructor(){this.ctx=null,this.master=null,this.engine=null,this.engineGain=null,this.impactAt=0}start(){if(this.ctx)this.ctx.resume();else{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.master=this.ctx.createGain(),this.master.gain.value=.24,this.master.connect(this.ctx.destination),this.engine=this.ctx.createOscillator(),this.engine.type="sawtooth",this.engine.frequency.value=62;let t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.value=240,this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=.035,this.engine.connect(t).connect(this.engineGain).connect(this.master),this.engine.start()}}update(t,e){if(!this.ctx)return;let i=this.ctx.currentTime;this.engine.frequency.setTargetAtTime(52+t*.65+e*28,i,.08),this.engineGain.gain.setTargetAtTime(.025+t*25e-5+e*.035,i,.1)}tone(t,e=.06,i="square",n=.11,r=.45){if(!this.ctx)return;let a=this.ctx.currentTime,o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type=i,o.frequency.setValueAtTime(t,a),o.frequency.exponentialRampToValueAtTime(Math.max(35,t*r),a+e),c.gain.setValueAtTime(n,a),c.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(c).connect(this.master),o.start(a),o.stop(a+e+.02)}cannon(){this.tone(1820,.026,"square",.105,.14),this.tone(285,.085,"sawtooth",.15,.24),this.tone(82,.12,"triangle",.075,.5),this.noise(.058,.105)}plasma(){this.ctx&&this.ctx.currentTime<(this.plasmaAt||0)||(this.plasmaAt=this.ctx?this.ctx.currentTime+(_i?.085:.045):0,this.tone(760,.048,"sawtooth",.083,1.9),this.tone(168,.058,"square",.06,.48),this.tone(2180,.018,"square",.035,.4))}nova(){this.tone(82,.2,"sawtooth",.19,.2),this.tone(1380,.045,"square",.115,.12),this.tone(310,.09,"triangle",.08,.42),this.noise(.12,.15)}impact(t=0,e=1){if(!this.ctx)return;let i=this.ctx.currentTime;i<this.impactAt||(this.impactAt=i+(t===1?.036:.025),t===0?(this.tone(235,.05,"square",.052*e,.25),this.noise(.035,.04*e)):t===1?this.tone(520,.027,"sawtooth",.04*e,.32):(this.tone(118,.075,"sawtooth",.075*e,.2),this.noise(.052,.062*e)))}morph(){this.tone(240,.18,"square",.08,3.8),this.tone(1320,.22,"sine",.07,.55)}lock(){this.tone(1050,.08,"sine",.09,.92)}missile(){this.tone(180,.32,"sawtooth",.12,.3)}explosion(t=!1){this.tone(t?72:105,t?.55:.28,"sawtooth",t?.28:.16,.28),this.noise(t?.48:.22,t?.2:.11)}noise(t=.25,e=.12){if(!this.ctx)return;let i=this.ctx.createBuffer(1,this.ctx.sampleRate*t,this.ctx.sampleRate),n=i.getChannelData(0);for(let c=0;c<n.length;c++)n[c]=(Math.random()*2-1)*(1-c/n.length);let r=this.ctx.createBufferSource(),a=this.ctx.createBiquadFilter(),o=this.ctx.createGain();r.buffer=i,a.type="lowpass",a.frequency.value=650,o.gain.value=e,r.connect(a).connect(o).connect(this.master),r.start()}};function Lt(s,t=0,e=.4,i=.55){let n=new $n({color:s,emissive:t,emissiveIntensity:t?.72:0,metalness:e,roughness:i});return n.userData.baseIntensity=n.emissiveIntensity,n}function z(s,t,e=[0,0,0],i=[0,0,0],n=[1,1,1]){let r=new xe(s,t);return r.position.set(...e),r.rotation.set(...i),r.scale.set(...n),r}function we(s,t,e){let i=s/2,n=t/2,r=e/2,a=new Float32Array([-i,-n,r,i,-n,r,i,n,r,-i,n,r,-i,-n,-r,i,-n,-r,i,n*.25,-r,-i,n*.25,-r]),o=[0,1,2,0,2,3,4,6,5,4,7,6,0,4,5,0,5,1,3,2,6,3,6,7,1,5,6,1,6,2,0,3,7,0,7,4],c=new Me;return c.setAttribute("position",new Re(a,3)),c.setIndex(o),c.computeVertexNormals(),c}var El=class{constructor(t){for(this.group=new Ht,t.add(this.group),this.group.position.set(0,42,0),this.velocity=new R,this.angularVelocity=new R,this.deltaQ=new Qe,this.axis=new R,this.speed=0,this.forwardSpeed=0,this.sideSpeed=0,this.slipBank=0,this.slip=0,this.turnLoad=0,this.speedLoad=0,this.groundRush=0,this.boostBlend=0,this.brakeBlend=0,this.boostWasDown=!1,this.strafeInput=0,this.boost=100,this.shield=100,this.hull=100,this.maxShield=100,this.maxHull=100,this.heat=0,this.missileCd=0,this.damageCd=0,this.shieldDelay=0,this.alive=!0,this.elite=!1,this.eliteParts=null,this.eliteLight=null,this.weaponForm=0,this.muzzles=[],this.flames=[],this.gunBarrels=[],this.plasmaCoils=[],this.novaProngs=[],this.makeModel(),this.visual=new Ht;this.group.children.length;)this.visual.add(this.group.children[0]);this.group.add(this.visual),this.setWeaponForm(0)}makeModel(){let t=Lt(595234,4893,.88,.23),e=Lt(1389642,6957,.82,.25),i=Lt(6548991,2215144,.55,.18),n=Lt(16726915,12124226,.45,.22),r=new Jn({color:737116,emissive:336692,emissiveIntensity:1.2,metalness:.25,roughness:.08,transmission:.12,transparent:!0,opacity:.9});this.group.add(z(we(3.8,1.05,6.4),t,[0,0,0])),this.group.add(z(we(2.3,.75,3.3),e,[0,.68,-.25]));let a=z(new Ne(1,12,7),r,[0,1.03,-.15],[0,0,0],[1.15,.56,1.42]);this.group.add(a);let o=we(3.7,.18,2.7);this.group.add(z(o,e,[-2.55,-.02,.45],[0,-.18,-.05])),this.group.add(z(o,e,[2.55,-.02,.45],[0,.18,.05]));for(let l of[-1,1]){this.group.add(z(new ne(.82,.74,2.9),t,[l*2.65,-.15,.72],[0,0,l*.06])),this.group.add(z(new ne(.16,.12,2.45),i,[l*3.05,.02,.45]));let h=z(new Ie(.38,.1,6,12),i,[l*1.12,-.1,3.08]);this.group.add(h);let u=z(new Se(.31,2.8,7,1,!0),new Qt({color:6811647,transparent:!0,opacity:.62,blending:oe,depthWrite:!1}),[l*1.12,-.1,4.25],[Math.PI/2,0,0]);this.group.add(u),this.flames.push(u);let d=new fe;d.position.set(l*2.8,-.1,-1.4),this.group.add(d),this.muzzles.push(d);let p=z(new $t(.09,.14,1.1,8),i.clone(),[l*2.8,-.1,-1.65],[Math.PI/2,0,0]);this.group.add(p),this.gunBarrels.push(p);let g=new Ht,_=Lt(16757855,15034903,.42,.18);for(let v of[-1.25,-1.62,-1.98])g.add(z(new Ie(.27,.055,7,14),_,[l*2.8,-.1,v]));g.visible=!1,this.group.add(g),this.plasmaCoils.push(g);let m=new Ht,f=Lt(16734892,15211128,.4,.16);m.add(z(new Se(.11,1.75,6),f,[l*2.58,-.03,-1.78],[Math.PI/2,0,l*.2])),m.add(z(new Se(.11,1.75,6),f,[l*3.02,-.17,-1.78],[Math.PI/2,0,-l*.2])),m.visible=!1,this.group.add(m),this.novaProngs.push(m)}this.group.add(z(new ne(2.15,.18,.12),n,[0,.1,3.08]));let c=new li(4450559,3.5,18,2);c.position.set(0,-.25,3.2),this.group.add(c),this.engineLight=c,this.group.scale.setScalar(1.15)}setWeaponForm(t){this.weaponForm=t;let e=[6548991,16757855,16734892],i=[2215144,15034903,15211128];for(let n of this.gunBarrels)n.material.color.setHex(e[t]),n.material.emissive.setHex(i[t]),n.material.emissiveIntensity=t===0?.72:1.25,t===0?n.scale.set(1,1,1):t===1?n.scale.set(1.85,.82,1.85):n.scale.set(1.25,1.35,1.25);this.plasmaCoils.forEach(n=>n.visible=t===1),this.novaProngs.forEach(n=>n.visible=t===2)}setElite(t){if(t===this.elite)return!1;if(this.elite=t,!t)return this.eliteParts&&(this.visual.remove(this.eliteParts),this.eliteParts=null,this.eliteLight=null),this.maxShield=this.maxHull=100,this.shield=Math.min(this.shield,100),this.hull=Math.min(this.hull,100),!0;let e=new Ht,i=Lt(16762986,12085267,.82,.16),n=Lt(13303039,4054252,.72,.12),r=Lt(1058886,401726,.9,.16),a=Lt(16731819,14883453,.55,.16),o=new Qt({color:8976639,transparent:!0,opacity:.78,blending:oe,depthWrite:!1});for(let c of[-1,1])e.add(z(we(4.7,.18,5.8),r,[c*4.1,-.08,.38],[0,c*.18,c*.035])),e.add(z(new ne(3.3,.1,.16),i,[c*4.45,.03,-.9],[0,c*.18,c*.035])),e.add(z(new ne(.18,.55,3.2),n,[c*5.45,.22,.72],[0,c*.14,c*.12])),e.add(z(new $t(.48,.62,2.6,10),r,[c*3.35,-.28,1.5],[Math.PI/2,0,0])),e.add(z(new Ie(.53,.09,8,18),i,[c*3.35,-.28,2.82])),e.add(z(new Se(.42,3.5,9,1,!0),o,[c*3.35,-.28,4.25],[Math.PI/2,0,0])),e.add(z(new $t(.09,.15,1.7,8),n,[c*4.55,-.18,-1.7],[Math.PI/2,0,0]));return e.add(z(we(1.25,1.7,4.7),i,[0,1.25,.65])),e.add(z(new ne(1.55,.12,5.6),n,[0,.38,-.15])),e.add(z(new Ie(2.05,.11,8,28),a,[0,.18,1.5],[Math.PI/2,0,0])),e.add(z(new Se(.55,3.8,8),n,[0,.2,-3.8],[Math.PI/2,0,0])),this.eliteLight=new li(16761949,8,34,2),this.eliteLight.position.set(0,.1,2.7),e.add(this.eliteLight),this.visual.add(e),this.eliteParts=e,this.maxShield=this.maxHull=150,this.shield=150,this.hull=Math.max(this.hull,150),this.boost=100,this.heat=0,this.setWeaponForm(this.weaponForm),!0}reset(){this.setElite(!1),this.setWeaponForm(0),this.group.position.set(0,42,0),this.group.quaternion.identity(),this.visual.rotation.set(0,0,0),this.visual.position.set(0,0,0),this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.speed=this.forwardSpeed=this.sideSpeed=this.slipBank=this.slip=this.turnLoad=this.speedLoad=this.groundRush=this.boostBlend=this.brakeBlend=this.strafeInput=0,this.boostWasDown=!1,this.boost=this.shield=this.hull=100,this.maxShield=this.maxHull=100,this.heat=this.missileCd=this.damageCd=this.shieldDelay=0,this.alive=!0,this.group.visible=!0}forward(t=ni()){return t.copy(us).applyQuaternion(this.group.quaternion).normalize()}right(t=ni()){return t.copy(Ml).applyQuaternion(this.group.quaternion).normalize()}up(t=ni()){return t.copy(Qa).applyQuaternion(this.group.quaternion).normalize()}update(t,e,i,n){e.update(),this.damageCd-=t,this.missileCd=Math.max(0,this.missileCd-t),this.heat=Math.max(0,this.heat-t*(this.elite?.48:.29)),this.shieldDelay-=t,this.shieldDelay<0&&(this.shield=Math.min(this.maxShield,this.shield+t*(this.elite?9:5.5)));let r=Bt((e.key("KeyW")?1:0)-(e.key("KeyS")?1:0)+e.touchThrottle,-1,1),a=Bt((e.key("KeyD")?1:0)-(e.key("KeyA")?1:0)+e.touchStrafe,-1,1),o=(e.key("KeyC")?1:0)-(e.key("KeyX")?1:0),c=(e.key("KeyQ")?1:0)-(e.key("KeyE")?1:0),l=e.key("Space")&&this.boost>2,h=(e.key("ShiftLeft")||e.key("ShiftRight"))&&this.boost>1&&r>.12&&!l;this.boost=Bt(this.boost+(h?this.elite?-19:-28:l?-20:this.elite?22:15)*t,0,100),n.shielding=l,n.boosting=h;let u=(1+Bt((this.speed-70)/100,0,1)*.22)*(this.elite?1.04:1);if(e.fallback){let $=ht=>{let St=Math.max(0,Math.abs(ht)-.05)/.95;return Math.sign(ht)*Math.pow(St,1.1)},V=$(e.fallbackX),rt=$(e.fallbackY);this.angularVelocity.x=Zt(this.angularVelocity.x,-rt*3.45*u,10.2,t),this.angularVelocity.y=Zt(this.angularVelocity.y,-V*3.75*u,10.2,t)}else{let $=Bt(e.lookDX,-110,110),V=Bt(e.lookDY,-110,110);($||V)&&(wi.setFromEuler(new ti(-V*.00275*u,-$*.0029*u,0,"YXZ")),this.group.quaternion.multiply(wi).normalize(),this.angularVelocity.x=Bt(this.angularVelocity.x-V*.021*u,-3.9,3.9),this.angularVelocity.y=Bt(this.angularVelocity.y-$*.0225*u,-4.1,4.1)),this.angularVelocity.x*=Math.exp(-5.15*t),this.angularVelocity.y*=Math.exp(-4.95*t)}this.angularVelocity.z=Zt(this.angularVelocity.z,c*2.7,9.2,t),this.angularVelocity.length()>4.35&&this.angularVelocity.setLength(4.35);let d=this.angularVelocity.length()*t;d>1e-6&&(this.axis.copy(this.angularVelocity).normalize(),this.deltaQ.setFromAxisAngle(this.axis,d),this.group.quaternion.multiply(this.deltaQ).normalize()),this.turnLoad=Zt(this.turnLoad,Bt(Math.hypot(this.angularVelocity.x,this.angularVelocity.y)/4.05,0,1),8.5,t),this.strafeInput=a;let p=this.forward(Te),g=this.right(zi),_=this.up(rn);h&&!this.boostWasDown&&(this.velocity.addScaledVector(p,this.elite?13:11),n.cameraKick=Math.min(.55,n.cameraKick+.12),n.audio.tone(78,.18,"sawtooth",.075,2.4)),this.boostBlend=Zt(this.boostBlend,h?1:0,h?10:r<0?7:3.2,t),this.brakeBlend=Zt(this.brakeBlend,r<0?1:0,r<0?9:5,t),this.boostWasDown=h;let f=this.elite?106:84,v=this.elite?182:150,E=this.elite?-76:-58,x=a*(this.elite?86:68),w=o*(this.elite?57:42),T=this.velocity.dot(p),C=this.velocity.dot(g),P=this.velocity.dot(_),S=r<0&&T>5,b=r>0?r*Rh(f,v,this.boostBlend):r<0?S?0:Math.abs(r)*E:0,L=r>0?h?this.elite?4.6:4.25:T>f?.82:this.elite?3.2:2.75:r<0?S?this.elite?6.6:6.2:this.elite?4.2:3.8:.68,F=a?this.elite?14.5:13.5:this.elite?7.2:6.8,H=o?this.elite?8.4:7.2:.72;T=Zt(T,b,L,t),C=Zt(C,x,F,t),P=Zt(P,w,H,t),this.velocity.copy(p).multiplyScalar(T).addScaledVector(g,C).addScaledVector(_,P),this.forwardSpeed=T,this.sideSpeed=C;let G=$a.copy(this.group.position);this.group.position.addScaledVector(this.velocity,t),this.speed=this.velocity.length(),this.group.position.y<4&&(this.group.position.y=4,this.velocity.y=Math.max(3,-this.velocity.y*.2),n.damage(9)),this.group.position.y>210&&(this.group.position.y=210,this.velocity.y=Math.min(-3,-Math.abs(this.velocity.y)*.2)),i.collidePlayer(G,this.group.position,2.25,($,V)=>{$>7&&(this.velocity.multiplyScalar(.62),n.damage(Math.min(28,($-5)*1.05)),n.fx.explosion(V,16752734,!1),n.cameraKick=Math.min(1.2,n.cameraKick+$*.018))}),this.speed=this.velocity.length(),this.slip=Zt(this.slip,Bt(C/(this.elite?72:55),-1,1),6.5,t);let Y=Bt(this.angularVelocity.y/3.4,-1,1);this.slipBank=Zt(this.slipBank,Bt(-a*.18+Y*.14-this.slip*.1,-.38,.38),6.8,t),this.speedLoad=Zt(this.speedLoad,Bt((this.speed-72)/(this.elite?105:85),0,1),5.5,t),this.groundRush=Zt(this.groundRush,Bt((24-this.group.position.y)/20,0,1)*Bt((this.speed-42)/80,0,1),7,t),this.visual.rotation.z=Zt(this.visual.rotation.z,Bt(this.slipBank*1.25-this.slip*.08,-.5,.5),9.2,t),this.visual.rotation.y=Zt(this.visual.rotation.y,this.slip*.08,8,t),this.visual.rotation.x=Zt(this.visual.rotation.x,-o*.08-this.boostBlend*.035+this.brakeBlend*.055,9,t),this.visual.position.x=Zt(this.visual.position.x,-this.slip*.22,9,t);let W=.24+Math.max(0,this.forwardSpeed)/(this.elite?86:72)*(1-this.brakeBlend*.35)+this.boostBlend*1.45;for(let $ of this.flames)$.scale.y=Zt($.scale.y,W,9,t),$.material.opacity=.42+Math.random()*(.16+this.speedLoad*.1);this.engineLight.intensity=2+W*2.2,this.eliteParts&&(this.eliteParts.children.forEach($=>{$.material?.isMeshBasicMaterial&&$.geometry?.type==="ConeGeometry"&&($.scale.y=Zt($.scale.y,.8+W*.75,10,t))}),this.eliteLight.intensity=5+W*4)}},Tl=class{constructor(t){this.group=new Ht,t.add(this.group);let e=Lt(463133,1805,.86,.24),i=Lt(1058362,135966,.75,.28),n=Lt(10287359,3529197,.35,.2),r=Lt(16735130,12064604,.4,.22),a=new Qt({color:466473,transparent:!0,opacity:.94}),o=(l,h)=>(this.group.add(h),h);o(this.group,z(new ne(4.35,.48,.7),e,[0,-1.42,-2.48],[-.1,0,0])),o(this.group,z(new ne(3.35,.09,.24),n,[0,-1.13,-2.62],[-.1,0,0]));for(let l of[-1,1]){o(this.group,z(new ne(.19,2.55,.25),e,[l*1.47,-.04,-2.72],[0,0,-l*.13])),o(this.group,z(new ne(.055,2.25,.07),n,[l*1.39,-.04,-2.55],[0,0,-l*.13]));let h=z(we(1.18,.68,1.5),i,[l*2.05,-1.01,-2.42],[.02,-l*.24,0]);o(this.group,h),o(this.group,z(new Ji(.78,.34),new Qt({color:l>0?5838907:473158}),[l*2.02,-.92,-1.78],[0,-l*.28,0])),o(this.group,z(new ne(.48,.18,.65),e,[l*.72,-1.18,-2.86]))}o(this.group,z(new ne(2.9,.16,.22),e,[0,1.08,-2.72])),o(this.group,z(new ne(2.58,.05,.07),n,[0,.99,-2.55]));let c=z(new Ji(1.58,.48),a,[0,-1.18,-2.06],[-.12,0,0]);o(this.group,c);for(let l=-2;l<=2;l++)o(this.group,z(new ne(.16,.035,.03),l===0?r:n,[l*.27,-1.2,-2.02],[-.12,0,0]));this.turret=new Ht,this.turret.position.set(0,-.93,-3.28),this.turret.add(z(new $t(.34,.48,.45,8),e,[0,0,0])),this.turret.add(z(new $t(.08,.12,1.4,8),n,[0,.14,-.58],[Math.PI/2,0,0])),o(this.group,this.turret),this.group.position.z=-.04}update(t,e,i,n){let r=(t.key("KeyD")?1:0)-(t.key("KeyA")?1:0),a=t.fallback?t.fallbackX*26:t.lookDX,o=t.fallback?t.fallbackY*26:t.lookDY;this.turret.rotation.y=Zt(this.turret.rotation.y,-a*.004,10,n),this.turret.rotation.x=Zt(this.turret.rotation.x,-o*.003,10,n),this.group.position.x=Zt(this.group.position.x,-r*.22-Bt(a*.002,-.1,.1),8,n),this.group.position.z=Zt(this.group.position.z,-.04+e*.28,6,n),this.group.rotation.z=Zt(this.group.rotation.z,r*.065,7,n),this.group.traverse(c=>{c.isMesh&&c.material.emissive&&c.material.emissive.getHex()===3529197&&(c.material.emissiveIntensity=i?1.35:.72)})}};function fg(s){let t=new Ht,e=Lt(s==="gunship"?3149860:1055020,s==="gunship"?3145743:5157,.82,.28),i=Lt(s==="gunship"?16729724:4647679,s==="gunship"?15079768:2215400,.5,.21),n=Lt(6562106,5901611,.55,.16);if(s==="gunship"){t.add(z(we(5.8,1.65,6.8),e)),t.add(z(new ne(9,.38,2.5),e,[0,-.05,.3])),t.add(z(new ne(7.2,.12,.18),i,[0,.05,1.35])),t.add(z(new Ne(1,8,5),n,[0,.85,-.7],[0,0,0],[1.25,.6,1.6]));for(let a of[-3.7,3.7])t.add(z(new $t(.42,.6,2.2,8),e,[a,-.15,1],[Math.PI/2,0,0]))}else{t.add(z(we(3.4,1.1,5),e));for(let a of[-1,1])t.add(z(we(3.4,.18,2.6),e,[a*2,.05,.2],[0,a*.25,0]));t.add(z(new Ne(.72,8,5),n,[0,.65,-.55],[0,0,0],[1,.55,1.4])),t.add(z(new ne(3.8,.1,.15),i,[0,.1,1.75]))}let r=z(new Ne(.16,6,4),i,[0,0,-3.15]);return t.add(r),t}var wl=class{constructor(t,e){this.scene=t,this.game=e,this.chunkSize=this.length=120,this.gridRadius=_i?2:3,this.gridN=this.gridRadius*2+1,this.chunks=[],this.portals=[],this.pickups=[],this.container=new Ht,t.add(this.container),this.materials=this.makeMaterials(),this.makeSky();let i=0;for(let n=-this.gridRadius;n<=this.gridRadius;n++)for(let r=-this.gridRadius;r<=this.gridRadius;r++)this.chunks.push(this.makeTile(i++,r,n))}makeMaterials(){return{ground:Lt(856096,197644,.82,.4),road:Lt(1121069,199191,.76,.38),building:[Lt(1783122,465456,.72,.46),Lt(3154765,2166073,.67,.48),Lt(1917008,665905,.73,.42)],cyan:Lt(5304319,2478056,.32,.2),pink:Lt(16731290,14226536,.34,.22),amber:Lt(16761451,13137953,.3,.24),green:Lt(7208881,1759872,.28,.2),white:Lt(13227740,1515817,.58,.35)}}addBox(t,e,i,n,r,a=!0){let o=z(new ne(...i),r,n);return t.add(o),a&&e.push({x:n[0],y:n[1],z:n[2],hx:i[0]/2,hy:i[1]/2,hz:i[2]/2,near:!1}),o}compactTile(t){let e=new Map;for(let i of t.children){if(!i.isMesh||Array.isArray(i.material)||i.material.transparent)continue;let n=Object.entries(i.geometry.attributes).map(([a,o])=>`${a}:${o.itemSize}:${o.normalized?1:0}`).sort().join(","),r=`${i.material.uuid}|${i.geometry.index?"i":"n"}|${n}`;e.has(r)||e.set(r,[]),e.get(r).push(i)}for(let i of e.values()){if(i.length<2)continue;let n=[];for(let o of i){o.updateMatrix();let c=o.geometry.clone();c.applyMatrix4(o.matrix),n.push(c)}let r=Eh(n,!1);if(n.forEach(o=>o.dispose()),!r)continue;for(let o of i)t.remove(o),o.geometry.dispose();let a=new xe(r,i[0].material);a.frustumCulled=!0,t.add(a)}}makeSky(){this.skyGroup=new Ht,this.scene.add(this.skyGroup);let t=new be({side:Be,depthWrite:!1,uniforms:{top:{value:new Rt(132630)},horizon:{value:new Rt(6821956)},low:{value:new Rt(1181983)}},vertexShader:"varying float vY;void main(){vY=normalize(position).y;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying float vY;uniform vec3 top;uniform vec3 horizon;uniform vec3 low;void main(){float h=exp(-pow((vY-.03)*3.2,2.0));vec3 base=mix(low,top,smoothstep(-.25,.55,vY));gl_FragColor=vec4(mix(base,horizon,h*.72),1.0);}"});this.skyGroup.add(z(new Ne(1650,_i?24:32,_i?12:18),t));let e=[];for(let r=0;r<(_i?480:850);r++){let a=pt(420,1350),o=pt(0,Math.PI*2);e.push(Math.cos(o)*a,pt(120,680),Math.sin(o)*a)}let i=new Me;i.setAttribute("position",new te(e,3)),this.skyGroup.add(new Kn(i,new xn({color:10804479,size:1.2,transparent:!0,opacity:.75})));let n=z(new Ds(76,32),new Qt({color:16748400,side:qe}),[-720,250,-920]);this.skyGroup.add(n);for(let r=0;r<13;r++){let a=r/13*Math.PI*2,o=850;this.skyGroup.add(z(new Se(pt(80,170),pt(170,330),4),new Qt({color:r%2?1772333:792112}),[Math.cos(a)*o,pt(30,75),Math.sin(a)*o],[0,pt(-.4,.4),0]))}}makeTile(t,e,i){let n=new Ht;n.position.set(e*this.chunkSize,0,i*this.chunkSize),this.container.add(n);let r=[],a=e===0&&i===0;this.addBox(n,r,[118,.5,118],[0,-.35,0],this.materials.ground,!1),this.addBox(n,r,[25,.08,118],[0,0,0],this.materials.road,!1),this.addBox(n,r,[118,.08,25],[0,.01,0],this.materials.road,!1);for(let l of[-7,7])this.addBox(n,r,[.11,.04,112],[l,.08,0],l<0?this.materials.pink:this.materials.cyan,!1),this.addBox(n,r,[112,.04,.11],[0,.09,l],l<0?this.materials.amber:this.materials.cyan,!1);let o=0;for(let l of[-1,1])for(let h of[-1,1]){o++;let u=l*36,d=h*36;if((t+o)%5===0){let g=12+(t*7+o*5)%24,_=pt(28,39),m=pt(27,39);this.addBox(n,r,[_,1.2,m],[u,g,d],this.materials.building[(t+o)%3]);for(let f of[u-_*.38,u+_*.38])for(let v of[d-m*.38,d+m*.38])this.addBox(n,r,[1.05,g,1.05],[f,g/2,v],this.materials.white);this.addBox(n,r,[_,.12,1],[u,g+.7,d-h*m*.46],l===h?this.materials.pink:this.materials.cyan,!1);for(let f=0;f<3;f++)n.add(z(we(2,.5,3.6),f%2?this.materials.amber:this.materials.cyan,[u+pt(-_*.3,_*.3),g+1,d+pt(-m*.3,m*.3)],[0,pt(0,6.2),0]))}else{let g=pt(24,38),_=pt(24,38),m=pt(24,92)+(t%11===0&&o===1?65:0);this.addBox(n,r,[g,m,_],[u,m/2,d],this.materials.building[(t+o)%3]);let f=l===h?this.materials.cyan:this.materials.pink;for(let v=0;v<3;v++)this.addBox(n,r,[.08,pt(2,5),_*.56],[u-l*(g/2+.05),pt(5,m-4),d+pt(-_*.2,_*.2)],f,!1),this.addBox(n,r,[g*.5,pt(.3,1),.08],[u+pt(-g*.18,g*.18),pt(5,m-4),d-h*(_/2+.05)],v===2?this.materials.amber:f,!1);n.add(z(new $t(.18,.18,pt(4,12),6),f,[u,m+4,d]))}}if(!a&&t%3===0){let l=30+t%4*9,h=t%2===0;h?this.addBox(n,r,[95,1.15,5],[0,l,0],this.materials.building[1]):this.addBox(n,r,[5,1.15,95],[0,l,0],this.materials.building[1]);for(let d of[-42,42]){let p=h?d:0,g=h?0:d;this.addBox(n,r,[1,l,1],[p,l/2,g],this.materials.white)}let u=h?[92,.12,.35]:[.35,.12,92];this.addBox(n,r,u,[0,l+.75,h?2.1:0],this.materials.amber,!1)}if(t%9===4){let l=18+t%3*8;for(let h of[-2,-1,0,1,2]){let u=t%2===1,d=u?[105,.42,.7]:[.7,.42,105],p=u?[0,l+h*3,h*5]:[h*5,l+h*3,0];this.addBox(n,r,d,p,h%2?this.materials.pink:this.materials.cyan)}}if(t%11===7){let l=new Ht;for(let h of[18,36,54,72])l.add(z(new Ie(8-h*.035,.22,7,24),h%36?this.materials.pink:this.materials.cyan,[0,h,0],[Math.PI/2,0,0]));l.add(z(new $t(.7,1.2,82,7),this.materials.building[0],[0,41,0])),n.add(l)}if(t%13===6){let l=new Ht,h=new Qt({color:16730272,transparent:!0,opacity:.72,blending:oe}),u=new Qt({color:5565951,transparent:!0,opacity:.68,blending:oe});l.add(z(new Ie(7,.5,10,32),h)),l.add(z(new Ie(5.3,.18,8,28),u)),l.position.set(0,22+t%4*12,0),l.rotation.y=t%4*Math.PI/2,n.add(l),this.portals.push({mesh:l,chunk:n,cool:0})}if(t%5===2){let l=new Ht;l.add(z(new bi(1.2,1),this.materials.green)),l.add(z(new Ie(2.2,.13,6,24),this.materials.green)),l.position.set(t%2?0:pt(-8,8),12+t%4*11,t%2?pt(-8,8):0),n.add(l),this.pickups.push({mesh:l,chunk:n,taken:!1})}return _i&&this.compactTile(n),{group:n,collisions:r,tx:e,tz:i,homeTx:e,homeTz:i,seed:t,center:new R(e*this.chunkSize,0,i*this.chunkSize)}}reset(){for(let t of this.chunks)t.tx=t.homeTx,t.tz=t.homeTz,t.group.position.set(t.tx*this.chunkSize,0,t.tz*this.chunkSize),t.center.copy(t.group.position),t.collisions.forEach(e=>e.near=!1);for(let t of this.pickups)t.taken=!1,t.mesh.visible=!0}updateAround(t){let e=Math.round(t.x/this.chunkSize),i=Math.round(t.z/this.chunkSize),n=this.gridRadius,r=this.gridN;for(let a of this.chunks){let o=!1;for(;a.tx<e-n;)a.tx+=r,o=!0;for(;a.tx>e+n;)a.tx-=r,o=!0;for(;a.tz<i-n;)a.tz+=r,o=!0;for(;a.tz>i+n;)a.tz-=r,o=!0;if(o){a.group.position.set(a.tx*this.chunkSize,0,a.tz*this.chunkSize),a.center.copy(a.group.position),a.collisions.forEach(c=>c.near=!1);for(let c of this.pickups)c.chunk===a.group&&(c.taken=!1,c.mesh.visible=!0)}}}update(t,e=1/60){this.updateAround(t),this.skyGroup.position.set(t.x,0,t.z);for(let i of this.portals){i.cool-=e,i.mesh.rotation.z+=e*.55;let n=i.mesh.getWorldPosition(Te);if(i.cool<=0&&n.distanceTo(t)<5.8){let r=this.portals.filter(a=>a!==i&&a.cool<=0);if(r.length){let a=r[Math.floor(Math.random()*r.length)],o=a.mesh.getWorldPosition(zi);t.copy(o).addScaledVector(this.game.player.forward(sn),12),this.game.camera.position.copy(t);for(let l of this.portals)l.cool=2.2;this.game.score+=500,this.game.message("GATE TRANSIT","\u8DE8\u533A\u8DC3\u8FC1 // +500");let c=ut("#flash");c.style.transition="none",c.style.opacity=.9,requestAnimationFrame(()=>{c.style.transition="opacity .55s",c.style.opacity=0}),this.game.audio.tone(120,.55,"sine",.2,5)}}}for(let i of this.pickups)i.taken||(i.mesh.rotation.y+=e*1.5,i.mesh.rotation.x+=e*.7,i.mesh.getWorldPosition(Te).distanceTo(t)<4&&(i.taken=!0,i.mesh.visible=!1,this.game.player.shield=Math.min(100,this.game.player.shield+45),this.game.player.boost=Math.min(100,this.game.player.boost+30),this.game.score+=180,this.game.message("SHIELD CHARGED","\u62A4\u76FE\u4E0E\u63A8\u8FDB\u50A8\u5907\u5DF2\u8865\u5145"),this.game.audio.lock()))}collidePlayer(t,e,i,n){for(let r of this.chunks)if(!(Math.abs(r.center.x-e.x)>this.chunkSize*1.1||Math.abs(r.center.z-e.z)>this.chunkSize*1.1))for(let a of r.collisions){let o=r.group.position.x+a.x,c=r.group.position.z+a.z,l=e.x-o,h=e.y-a.y,u=e.z-c,d=Math.max(Math.abs(l)-a.hx,0),p=Math.max(Math.abs(h)-a.hy,0),g=Math.max(Math.abs(u)-a.hz,0),_=Math.hypot(d,p,g);if(_<i){let m=a.hx+i-Math.abs(l),f=a.hy+i-Math.abs(h),v=a.hz+i-Math.abs(u),E;m<f&&m<v?(E=Te.set(Math.sign(l)||1,0,0),e.x=o+E.x*(a.hx+i)):f<v?(E=Te.set(0,Math.sign(h)||1,0),e.y=a.y+E.y*(a.hy+i)):(E=Te.set(0,0,Math.sign(u)||1),e.z=c+E.z*(a.hz+i));let x=Math.abs(this.game.player.velocity.dot(E));this.game.player.velocity.addScaledVector(E,x*1.2),this.game.player.damageCd<=0&&(this.game.player.damageCd=.55,n(x,e.clone()))}else _<5.2&&!a.near&&(a.near=!0,this.game.nearMiss())}}raycastDistance(t,e,i,n=0){let r=new $i(t,e),a=new Mi,o=new R,c=i;for(let l of this.chunks){let h=l.center.x-t.x,u=-t.y,d=l.center.z-t.z,p=Bt(h*e.x+u*e.y+d*e.z,0,c),g=t.x+e.x*p-l.center.x,_=t.z+e.z*p-l.center.z;if(!(g*g+_*_>(this.chunkSize*.84)**2))for(let m of l.collisions){a.min.set(l.group.position.x+m.x-m.hx-n,m.y-m.hy-n,l.group.position.z+m.z-m.hz-n),a.max.set(l.group.position.x+m.x+m.hx+n,m.y+m.hy+n,l.group.position.z+m.z+m.hz+n);let f=r.intersectBox(a,o);if(f){let v=f.distanceTo(t);v<c&&(c=v)}}}return c}segmentBlocked(t,e,i=0){let n=Te.copy(e).sub(t),r=n.length();return r<.001?!1:(n.normalize(),this.raycastDistance(t,n,r,i)<r-.001)}},Al=class{constructor(t,e,i){this.game=t,this.type=e,this.group=fg(e),t.scene.add(this.group),this.group.position.copy(i),this.velocity=new R(pt(-5,5),pt(-2,2),-30),this.hp=e==="gunship"?110:42,this.maxHp=this.hp,this.radius=e==="gunship"?4.6:2.8,this.state="approach",this.timer=pt(1,2.5),this.fireTimer=pt(.8,2),this.orbit=Math.random()>.5?1:-1,this.phase=pt(0,10),this.dead=!1,this.flash=0,this.value=e==="gunship"?850:280}update(t){let e=this.game.player,i=this.group.position.distanceTo(e.group.position);this.timer-=t,this.fireTimer-=t,this.flash-=t,this.state==="approach"&&i<72?(this.state="orbit",this.timer=pt(2.2,4)):this.state==="orbit"&&this.timer<0?(this.state="break",this.timer=pt(1.1,1.8),this.orbit*=-1):this.state==="break"&&this.timer<0&&(this.state="approach",this.timer=3);let n=e.forward(Te),r=e.right(zi),a=e.up(rn),o=sn.copy(e.group.position);this.state==="approach"?o.addScaledVector(n,pt(10,24)).addScaledVector(r,this.orbit*24).addScaledVector(a,8+Math.sin(this.phase)*8):this.state==="orbit"?o.addScaledVector(r,this.orbit*(this.type==="gunship"?45:30)).addScaledVector(n,-5).addScaledVector(a,10+Math.sin(performance.now()*.001+this.phase)*12):o.addScaledVector(n,-95).addScaledVector(r,this.orbit*48).addScaledVector(a,20);let c=o.sub(this.group.position).normalize().multiplyScalar(this.type==="gunship"?32:47);this.velocity.lerp(c,1-Math.exp(-(this.type==="gunship"?1.6:2.4)*t));for(let d of this.game.enemies)if(d!==this&&!d.dead){let p=this.group.position.distanceTo(d.group.position);p<12&&this.velocity.add(rn.copy(this.group.position).sub(d.group.position).normalize().multiplyScalar((12-p)*t*7))}this.group.position.addScaledVector(this.velocity,t);let l=Te.copy(this.velocity).normalize();wi.setFromUnitVectors(us,l),this.group.quaternion.slerp(wi,1-Math.exp(-5*t)),this.group.rotateZ(Math.sin(performance.now()*.002+this.phase)*.015),this.flash>0?this.group.traverse(d=>{d.isMesh&&d.material.emissive&&(d.material.emissiveIntensity=5)}):this.group.traverse(d=>{d.isMesh&&d.material.emissive&&(d.material.emissiveIntensity=d.material.userData.baseIntensity||2.2)});let h=rn.copy(e.group.position).sub(this.group.position).normalize(),u=sn.copy(us).applyQuaternion(this.group.quaternion).normalize();this.fireTimer<0&&i<145&&i>22&&u.dot(h)>.92&&this.game.hasLineOfSight(this.group.position,e.group.position)&&(this.fireTimer=(this.type==="gunship"?pt(.35,.7):pt(.8,1.35))*(this.game.training?1.65:1),this.game.fireEnemy(this)),i>480&&this.destroy(!1)}damage(t,e){this.dead||(this.hp-=t,this.flash=.075,this.game.hitMarker(!1),this.game.fx.sparks(e,9369599,6),this.hp<=0&&this.destroy(!0))}destroy(t){this.dead||(this.dead=!0,this.game.scene.remove(this.group),t&&(this.game.score+=Math.round(this.value*this.game.combo),this.game.combo=Math.min(9.9,this.game.combo+.35),this.game.bestCombo=Math.max(this.game.bestCombo,this.game.combo),this.game.kills++,this.game.fx.explosion(this.group.position,this.type==="gunship"?16728445:5041407,this.type==="gunship"),this.game.audio.explosion(this.type==="gunship"),this.game.hitMarker(!0),this.game.message(this.type==="gunship"?"\u70AE\u8247\u6467\u6BC1":"\u76EE\u6807\u6E05\u9664",`CHAIN \xD7${this.game.combo.toFixed(1)}`)),this.game.lockTarget=null)}};function pg(){let s=new Ht,t=Lt(3478063,2558239,.55,.5),e=Lt(7730687,3528942,.3,.2),i=Lt(14262393,1771524,.15,.7),n=Lt(1054246,198157,.65,.55),r=new Qt({color:16730781,transparent:!0,opacity:.68,blending:oe,depthWrite:!1});s.add(z(new $t(.34,.46,1.05,6),t,[0,1.45,0])),s.add(z(new Ne(.3,7,5),i,[0,2.18,0])),s.add(z(new ne(.52,.11,.38),e,[0,1.68,-.27]));let a=[],o=[];for(let u of[-1,1]){let d=new Ht;d.position.set(u*.48,1.7,0),d.add(z(new $t(.09,.11,.82,5),t,[0,-.35,0])),s.add(d),a.push(d);let p=new Ht;p.position.set(u*.2,.92,0),p.add(z(new $t(.11,.14,.9,5),n,[0,-.4,0])),p.add(z(new ne(.25,.14,.45),e,[0,-.86,-.1])),s.add(p),o.push(p)}let c=z(new Ie(1.15,.08,7,24),r,[0,3.25,0],[Math.PI/2,0,0]),l=z(new Se(.28,.65,6),r,[0,4.15,0],[Math.PI,0,0]),h=z(new $t(.045,.045,3.5,5),r,[0,2.4,0]);return s.add(c,l,h),s.userData={arms:a,legs:o,ring:c,arrow:l},s}var Rl=class{constructor(t,e,i){this.game=t,this.type="fugitive",this.group=pg(),t.scene.add(this.group),this.group.position.copy(e),this.dir=i.clone().normalize(),this.speed=pt(7,12),this.hp=this.maxHp=20,this.radius=1.45,this.value=240,this.dead=!1,this.phase=pt(0,10),this.travel=0,this.turnAt=pt(38,55),this.flash=0,this.group.rotation.y=Math.atan2(this.dir.x,this.dir.z)}aimPosition(t=ni()){return t.copy(this.group.position).add(rn.set(0,1.55,0))}update(t){this.phase+=t*this.speed*1.3,this.flash-=t;let e=this.speed*t;this.group.position.addScaledVector(this.dir,e),this.travel+=e,this.travel>this.turnAt&&(this.travel=0,this.turnAt=pt(38,55),this.dir.negate(),this.group.rotation.y=Math.atan2(this.dir.x,this.dir.z));let i=this.group.userData,n=Math.sin(this.phase);i.arms[0].rotation.x=n*.8,i.arms[1].rotation.x=-n*.8,i.legs[0].rotation.x=-n*.85,i.legs[1].rotation.x=n*.85,i.ring.rotation.z+=t*1.9,i.ring.scale.setScalar(1+Math.sin(this.phase*.45)*.12),i.arrow.position.y=4.15+Math.sin(this.phase*.6)*.18,this.flash>0?this.group.scale.setScalar(1.18):this.group.scale.lerp(Te.set(1,1,1),1-Math.exp(-10*t)),this.group.position.distanceTo(this.game.player.group.position)>390&&this.destroy(!1)}damage(t,e){this.dead||(this.hp-=t,this.flash=.09,this.game.hitMarker(!1),this.game.fx.sparks(e,16747202,9),this.hp<=0&&this.destroy(!0))}destroy(t){this.dead||(this.dead=!0,this.game.scene.remove(this.group),t&&(this.game.captures++,this.game.kills++,this.game.score+=Math.round(this.value*this.game.combo),this.game.combo=Math.min(9.9,this.game.combo+.16),this.game.bestCombo=Math.max(this.game.bestCombo,this.game.combo),this.game.fx.explosion(this.group.position,7206911,!1),this.game.audio.tone(880,.12,"square",.08,.45),this.game.hitMarker(!0),this.game.message("FUGITIVE CAPTURED",`GROUND BOUNTY // ${this.game.captures}`)),this.game.lockTarget===this&&(this.game.lockTarget=null))}};function mg(){let s=new Ht,t=Lt(861222,200722,.28,.8),e=Lt(1654079,466721,.4,.66),i=Lt(4216399,1057567,.18,.78),n=Lt(2639946,665643,.36,.62),r=Lt(8583423,3530218,.22,.16),a=new Jn({color:2522367,emissive:482815,emissiveIntensity:1.35,metalness:.22,roughness:.08,transparent:!0,opacity:.88,transmission:.08,thickness:1.4}),o=Lt(3933976,2490380,.08,.65),c=Lt(16765805,16739095,.12,.1);a.userData.baseIntensity=1.35;let l={spines:[],crystals:[],tail:[],weak:[],legs:[],arms:[]};for(let f of[-1,1]){let v=new Ht;v.position.set(f*8,0,0),v.add(z(we(12,5,18),e,[0,2.5,-3])),v.add(z(new $t(5.6,6.8,28,8),t,[0,17,1])),v.add(z(new Ce(1,0),e,[0,39,1],[0,0,0],[7.2,13,7.5])),s.add(v),l.legs.push(v);let E=new Ht;E.position.set(f*15.5,77,0),E.add(z(new Ce(1,0),e,[0,0,0],[6.5,7,7.5])),E.add(z(new $t(3.9,5.1,20,8),t,[f*3,-10,0],[0,0,f*.26])),E.add(z(new $t(2.8,3.8,17,8),e,[f*6.5,-26,-2.5],[.22,0,f*.17])),E.add(z(new Ce(1,0),t,[f*7.8,-36,-5.4],[0,0,0],[4.4,2.6,4.8]));for(let x=-1;x<=1;x++)E.add(z(new Se(.72,5.5,5),n,[f*(7.8+x*.7),-39,-9-x*.35],[Math.PI/2+x*.08,0,-f*x*.16]));E.add(z(new Se(.58,3.8,5),n,[f*10.4,-37,-6.3],[Math.PI/2,0,-f*.55])),s.add(E),l.arms.push(E)}s.add(z(new Ce(1,0),t,[0,48,2],[0,0,0],[13.5,10,10])),s.add(z(new Ce(1,0),t,[0,61,1],[0,0,0],[14.5,18,11])),s.add(z(new Ce(1,0),e,[0,72,-1],[0,0,0],[16,15,12])),s.add(z(new Ne(1,9,7),i,[0,62,-10],[0,0,0],[10.5,16,3.5]));for(let f of[-1,1])s.add(z(we(10,3,12),n,[f*8.8,73,-10],[0,f*.12,f*.14]));s.add(z(new $t(6,8,18,8),t,[0,88,-2],[-.2,0,0])),l.head=new Ht,l.head.position.set(0,101,-5),l.head.add(z(new Ce(1,0),e,[0,0,-1],[0,0,0],[9,7.5,11]));for(let f of[-1,1])l.head.add(z(new Ce(1,0),t,[f*5.8,-1,-6],[0,0,0],[4.1,4.5,6])),l.head.add(z(we(7,2.4,7.5),n,[f*3.5,2,-9],[0,f*.08,-f*.13])),l.head.add(z(new Ne(.62,7,5),c,[f*3.3,.65,-11.3])),l.head.add(z(new Se(1.2,6.5,5),n,[f*5.7,5.4,-1.2],[0,0,-f*.62]));l.head.add(z(we(13.5,5.2,11),t,[0,-2.6,-10])),l.jaw=new Ht,l.jaw.position.set(0,-2.4,-4),l.jaw.add(z(we(13,3.8,13),e,[0,-3,-6.5])),l.jaw.add(z(new ne(10.5,.4,9.5),o,[0,-1.35,-6.8]));for(let f of[-1,1])for(let v=0;v<6;v++)l.jaw.add(z(new Se(.34,1.5,5),n,[f*(1.1+v*.72),-1.1,-3.5-v*1.15],[Math.PI,0,0]));l.head.add(l.jaw),l.mouth=new fe,l.mouth.position.set(0,-3.4,-16.5),l.head.add(l.mouth),s.add(l.head),l.chestBody=new fe,l.chestBody.position.set(0,70,-1),s.add(l.chestBody),l.chest=new fe,l.chest.position.set(0,70,-13),s.add(l.chest),l.headCore=new fe,l.headCore.position.set(0,-1,-13),l.head.add(l.headCore);let h=new Qt({color:16763229,transparent:!0,opacity:.7,blending:oe,depthWrite:!1}),u=z(new Ie(5.2,.2,8,28),h,[0,-1,-13]);l.head.add(u),l.weak.push(u);let d=z(new Ie(9,.24,8,32),h);l.chest.add(d),l.weak.push(d);let p=[[94,3.2,8],[89,4.3,10],[82,5.5,13],[74,6.6,17],[65,7.2,19],[56,6.5,17],[47,5.5,14],[39,4.3,11],[33,3.2,9]];for(let[f,v,E]of p){let x=10+E*.45;s.add(z(new Se(v,E,4),n,[0,f,x],[Math.PI/2,0,0]));let w=a.clone(),T=z(new Se(v*.72,E*.86,4),w,[0,f,x+E*.14],[Math.PI/2,0,0]),C=r.clone(),P=z(new Se(v*.31,E*.58,4),C,[0,f,x+E*.27],[Math.PI/2,0,0]);w.userData.baseIntensity=1.35,C.userData.baseIntensity=.72,s.add(T,P),l.crystals.push(T),l.spines.push(P)}l.tailRoot=new Ht,l.tailRoot.position.set(0,46,10),s.add(l.tailRoot);let g=l.tailRoot,_=[9.5,9,8.5,8,7.5,7,6.5,6,5.5,5];for(let f=0;f<_.length;f++){let v=_[f],E=6.8-f*.63,x=Math.max(.5,E-.65),w=new Ht,T=z(new $t(x,E,v,7),f%2?t:e,[0,0,v/2],[Math.PI/2,0,0]);w.add(T),g.add(w),l.tail.push(w),f<3&&w.add(z(new Se(2.5-f*.55,6-f,4),n,[0,2,v*.48],[Math.PI/2,0,0]));let C=new Ht;C.position.z=v,w.add(C),g=C}let m=new li(5303039,0,140,2);return l.mouth.add(m),l.mouthLight=m,s.userData=l,s}var Cl=class{constructor(t,e){this.game=t,this.type="boss",this.bossKind="kaiju",this.targetName="BLUE-CRYSTAL KAIJU",this.hudLabel="CITY TITAN // 110M \u84DD\u6676\u54E5\u65AF\u62C9",this.hudGradient="linear-gradient(90deg,#ff2d82,#357dff 52%,#82f8ff)",this.radarColor="#3f9dff",this.group=mg(),this.group.position.copy(e),t.scene.add(this.group),this.hp=this.maxHp=t.training?6e3:8500,this.radius=30,this.value=22e3,this.dead=!1,this.time=0,this.phase=1,this.attackTimer=1.9,this.attackState="idle",this.attackClock=0,this.pending="breath",this.beamTick=0,this.damageTick=0,this.weakMsg=0,this.armorBurst=0,this.crystalCharge=0,this.crystalFx=0,this.beamTarget=new R,this.lastPhase=1,this.parts=this.group.userData}aimPosition(t=ni()){return this.parts.chest.getWorldPosition(t)}hitSpheres(){return[{center:this.parts.headCore.getWorldPosition(new R),radius:5.8},{center:this.parts.head.getWorldPosition(new R),radius:12},{center:this.parts.chest.getWorldPosition(new R),radius:8.8},{center:this.parts.chestBody.getWorldPosition(new R),radius:18},{center:this.group.localToWorld(new R(0,48,2)),radius:17}]}beginAttack(t){this.pending=t,this.attackState="telegraph",this.attackClock=t==="breath"?.98:t==="shock"?.86:.62,t==="breath"&&(this.crystalCharge=0,this.crystalFx=0),this.parts.mouthLight.intensity=t==="breath"?22:9,this.game.message(t==="breath"?"CRYSTAL ATOMIC BREATH":t==="shock"?"GROUND PULSE":"PLASMA BARRAGE",t==="breath"?"\u84DD\u6676\u80CC\u9CCD\u9010\u8282\u84C4\u80FD // \u7ACB\u5373\u6A2A\u5411\u89C4\u907F":t==="shock"?"\u51B2\u51FB\u9AD8\u5EA6 50m // \u7ACB\u5373\u722C\u5347":"\u5DE8\u517D\u653B\u51FB\u9884\u8B66",880),this.game.audio.tone(t==="breath"?78:138,this.attackClock,"sawtooth",.19,t==="breath"?3.2:.48)}executeAttack(){let t=this.game.player;if(this.pending==="breath")this.attackState="breath",this.attackClock=1.3+this.phase*.12,this.beamTick=0,this.damageTick=0,this.beamTarget.copy(t.group.position).addScaledVector(t.velocity,.18);else if(this.pending==="shock")this.attackState="idle",this.attackTimer=2.15-this.phase*.28,this.game.fx.shockwave(this.group.position.clone(),16731806,185),Math.hypot(t.group.position.x-this.group.position.x,t.group.position.z-this.group.position.z)<185&&t.group.position.y<50&&this.game.damage(30+this.phase*7,this.group.position),this.game.cameraKick=Math.min(1.55,this.game.cameraKick+.9),this.game.audio.explosion(!0);else{this.attackState="idle",this.attackTimer=1.85-this.phase*.23;let e=this.parts.mouth.getWorldPosition(new R),i=3+this.phase*2;for(let n=0;n<i;n++){let r=(n-(i-1)/2)*6.5;this.game.fireBossOrb(e,t.group.position.clone().addScaledVector(t.right(new R),r),this.phase,n*.12)}this.game.audio.missile()}}update(t){if(this.dead)return;this.time+=t,this.weakMsg-=t,this.armorBurst=Math.max(0,this.armorBurst-t);let e=this.game.player,i=e.group.position.x-this.group.position.x,n=e.group.position.z-this.group.position.z,r=Math.atan2(-i,-n),a=Math.atan2(Math.sin(r-this.group.rotation.y),Math.cos(r-this.group.rotation.y));this.group.rotation.y+=a*(1-Math.exp(-1.25*t));let o=this.time*(1.25+this.phase*.16);this.parts.legs[0].rotation.x=Math.sin(o)*.1,this.parts.legs[1].rotation.x=-Math.sin(o)*.1,this.parts.arms[0].rotation.z=.11+Math.sin(o*.7)*.14,this.parts.arms[1].rotation.z=-.11-Math.sin(o*.7)*.14,this.parts.head.rotation.y=Math.sin(this.time*.67)*.11,this.parts.jaw.rotation.x=Zt(this.parts.jaw.rotation.x,this.attackState==="breath"||this.attackState==="telegraph"?.25:.025+Math.sin(this.time*1.4)*.025,8,t),this.parts.tailRoot.rotation.y=Math.sin(this.time*.48)*.1,this.parts.tail.forEach((d,p)=>{d.rotation.y=Math.sin(this.time*.72-p*.42)*(.02+p*.008),d.rotation.x=-.012-p*.002}),this.parts.weak.forEach((d,p)=>{d.rotation.z+=t*(p?-.65:.9),d.scale.setScalar(1+Math.sin(this.time*3+p)*.08)});let c=this.pending==="breath"&&this.attackState==="telegraph",l=this.attackState==="breath";if(this.crystalCharge=Zt(this.crystalCharge,c||l?1:0,c?5:2.1,t),this.parts.crystals.forEach((d,p)=>{let g=Bt(this.crystalCharge*this.parts.crystals.length-(this.parts.crystals.length-1-p),0,1);d.material.emissiveIntensity=(d.material.userData.baseIntensity||1.35)*(1+this.phase*.3+g*3.8+Math.sin(this.time*6-p*.45)*.12),d.scale.setScalar(1+g*.075)}),this.parts.spines.forEach((d,p)=>d.material.emissiveIntensity=(d.material.userData.baseIntensity||.7)*(1.15+this.phase*.48+this.crystalCharge*3+Math.sin(this.time*5-p*.4)*.18)),(c||l)&&(this.crystalFx-=t)<=0){this.crystalFx=l?.045:.07;let d=this.parts.crystals.length,p=Bt(d-1-Math.floor(this.crystalCharge*d),0,d-1),g=this.parts.crystals[p].getWorldPosition(new R),_=this.parts.mouth.getWorldPosition(new R);this.game.fx.sparks(g,3969535,l?7:4);for(let m=0;m<2;m++)this.game.fx.addParticle(g,_.clone().sub(g).multiplyScalar(pt(2.2,3.2)),m?8583423:2522367,pt(.28,.42))}let h=this.hp<this.maxHp*.34?3:this.hp<this.maxHp*.67?2:1;if(h!==this.phase&&(this.phase=h,this.lastPhase=h,this.attackTimer=.65,this.armorBurst=.75,h===3&&(e.boost=Math.max(0,e.boost-28)),this.game.message(`TITAN PHASE ${h}`,h===3?"\u6838\u5FC3\u66B4\u8D70 // EMP \u524A\u51CF\u63A8\u8FDB\u80FD\u91CF":"\u88C5\u7532\u7206\u88C2 // \u80CC\u9CCD\u8FC7\u8F7D",1900,!0),this.game.fx.explosion(this.aimPosition(new R),16732061,!0),this.game.fx.shockwave(this.group.position.clone(),6485503,185),this.game.audio.explosion(!0)),this.attackState==="idle"){if(this.attackTimer-=t,this.attackTimer<=0){let d=Math.hypot(i,n),p=Math.random();this.beginAttack(d<185&&p<.34?"shock":p<.67?"breath":"volley")}}else if(this.attackState==="telegraph")this.attackClock-=t,this.parts.mouthLight.intensity=8+Math.pow(1-Bt(this.attackClock/.98,0,1),2)*48,this.attackClock<=0&&this.executeAttack();else if(this.attackState==="breath"){this.attackClock-=t,this.beamTick-=t,this.damageTick-=t;let d=this.parts.mouth.getWorldPosition(new R),p=e.group.position.clone().addScaledVector(e.velocity,.18);this.beamTarget.lerp(p,1-Math.exp(-2.35*t)),this.beamTick<=0&&(this.beamTick=.075,this.game.fx.bossBeam(d,this.beamTarget,2591999),this.game.cameraKick=Math.min(1.2,this.game.cameraKick+.042)),this.damageTick<=0&&ja(d,this.beamTarget,e.group.position)<64&&(this.damageTick=.2,this.game.damage(14+this.phase*4,d)),this.attackClock<=0&&(this.attackState="idle",this.attackTimer=2.25-this.phase*.34,this.parts.mouthLight.intensity=0)}let u=this.aimPosition(new R);u.distanceTo(e.group.position)<this.radius+4&&e.damageCd<=0&&(this.game.damage(42+this.phase*4,u),e.velocity.add(e.group.position.clone().sub(u).normalize().multiplyScalar(52)))}damage(t,e){if(this.dead)return;let i=!1;if(e){let a=this.parts.headCore.getWorldPosition(new R),o=this.parts.chest.getWorldPosition(new R);i=e.distanceTo(a)<6.6||e.distanceTo(o)<9.7}let n=this.phase===1?1:this.phase===2?.9:.8,r=t*(i?1.65:.5)*n*(this.armorBurst>0?.2:1);this.hp-=r,this.game.hitMarker(!1),this.game.fx.sparks(e||this.aimPosition(new R),i?16767344:6419711,i?20:7),this.weakMsg<=0&&(this.weakMsg=i?.48:.82,this.game.message(i?"CORE CRITICAL":"TITAN ARMOR",i?`DAMAGE \xD71.65 // ${Math.max(0,Math.ceil(this.hp))} HP`:"\u7784\u51C6\u5934\u90E8\u6216\u80F8\u53E3\u53D1\u5149\u6838\u5FC3",i?560:720)),this.hp<=0&&this.destroy()}destroy(){if(this.dead)return;this.dead=!0,this.hp=0,this.game.bossStage=1,this.game.nextBossTimer=3.2,this.game.bossKills++,this.game.kills+=10;let t=Math.round(this.value*this.game.combo);this.game.score+=t,this.game.combo=Math.min(9.9,this.game.combo+2.4),this.game.bestCombo=Math.max(this.game.bestCombo,this.game.combo);let e=this.group.position.clone();for(let i of[[0,20,0],[-10,48,3],[11,70,-5],[0,103,-8],[-8,34,9],[8,82,5],[0,60,-12]])this.game.fx.explosion(e.clone().add(new R(...i)),Math.random()>.5?16731798:6485503,!0);this.game.audio.explosion(!0),this.game.hitMarker(!0),this.game.message("CITY TITAN DOWN",`+${t.toLocaleString()} // \u7B2C\u4E8C\u5DE8\u578B\u4FE1\u53F7 3.2s`,2800,!0),this.game.player.shield=this.game.player.maxShield,this.game.player.hull=Math.min(this.game.player.maxHull,this.game.player.hull+30),this.game.player.boost=100,setTimeout(()=>{this.group.parent&&this.game.scene.remove(this.group)},1500),this.game.lockTarget===this&&(this.game.lockTarget=null)}};function gg(){let s=new Ht,t=Lt(14212578,1119515,.82,.24),e=Lt(15988214,2435634,.72,.2),i=Lt(6910331,1053722,.88,.3),n=Lt(2369842,592656,.92,.24),r=Lt(592656,327944,.7,.34),a=Lt(10189823,5972223,.34,.12),o=Lt(16728159,12910631,.36,.14),c=Lt(16751817,16720991,.2,.08),l={legs:[],arms:[],hands:[],barrier:[]};for(let v of[-1,1]){let E=new Ht;E.position.set(v*7,55,0),E.add(z(new $t(5.1,6.1,28,8),t,[0,-14,0])),E.add(z(new Ce(1,0),i,[0,-28,0],[0,0,0],[6.2,5.4,6.3])),E.add(z(new $t(4.1,5.2,27,8),n,[0,-40.5,.7])),E.add(z(we(10.5,5.2,16),t,[0,-52,-3])),E.add(z(new ne(2.2,20,.45),o,[v*3.4,-40,-4.1],[0,0,v*.08])),s.add(E),l.legs.push(E);let x=new Ht;x.position.set(v*17,82,0),x.add(z(new Ce(1,0),e,[0,0,0],[7.2,6.2,7.7])),x.add(z(new $t(4.1,5.2,23,8),t,[0,-11,0])),x.add(z(new Ce(1,0),i,[0,-22,0],[0,0,0],[5.2,4.8,5.5])),x.add(z(new $t(3.7,4.7,20,8),n,[0,-31,-1.2],[.08,0,0])),x.add(z(new Ce(1,0),t,[0,-40,-2.5],[0,0,0],[4.7,4,5.2])),x.add(z(we(5.2,1.4,17),e,[v*3.8,-29,-1.5],[0,v*.08,-v*.18]));let w=new fe;w.position.set(0,-41,-5.2),x.add(w),s.add(x),l.arms.push(x),l.hands.push(w),v===1&&(l.beamMuzzle=w)}s.add(z(new Ce(1,0),n,[0,55,1],[0,0,0],[13.5,9.5,9])),s.add(z(new Ce(1,0),i,[0,66,0],[0,0,0],[12.8,15,8.8])),s.add(z(new Ce(1,0),t,[0,77,-.5],[0,0,0],[17.5,16,10])),s.add(z(new Ne(1,10,7),r,[0,68,-8.6],[0,0,0],[8.8,13.5,2.5]));for(let v of[-1,1])s.add(z(we(10,3.2,18),e,[v*7,80,-9],[0,v*.12,v*.5])),s.add(z(we(5.5,2,15),o,[v*5.8,67,-9.2],[0,v*.08,-v*.36])),s.add(z(new Se(2.2,8,5),i,[v*17.2,84,0],[0,0,-v*.72]));s.add(z(new $t(5.3,6.6,9,8),n,[0,91,-.3])),l.head=new Ht,l.head.position.set(0,99.5,-1),l.head.add(z(new Ne(1,10,8),t,[0,0,0],[0,0,0],[7.8,8.7,7.2])),l.head.add(z(we(8.8,5.2,4.2),n,[0,1.1,-6.3])),l.head.add(z(we(2.2,6,8),e,[0,7.5,-.5]));for(let v of[-1,1])l.head.add(z(new Ne(1,7,4),c,[v*2.7,1.8,-6.8],[0,0,-v*.14],[2.25,.58,.36])),l.head.add(z(new Se(1.5,5.5,4),i,[v*7.5,.3,-.2],[0,0,-v*Math.PI/2]));l.head.add(z(new ne(4.5,.42,.45),r,[0,-3.2,-7])),s.add(l.head),l.core=new fe,l.core.position.set(0,76,-10.3);let h=z(new Ne(3.35,10,7),a),u=z(new Ie(4.5,.38,8,28),o);l.core.add(h,u),l.coreMesh=h,l.coreRing=u;let d=new li(10315263,12,55,2);l.core.add(d),l.coreLight=d,s.add(l.core);let p=new Qt({color:14411519,transparent:!0,opacity:0,wireframe:!0,toneMapped:!1,blending:oe,depthWrite:!1,side:qe}),g=new Qt({color:10318591,transparent:!0,opacity:0,toneMapped:!1,blending:oe,depthWrite:!1,side:qe}),_=z(new Ne(1,18,12),p,[0,56,0],[0,0,0],[31,56,25]),m=z(new Ie(31,.35,7,56),g,[0,58,0]),f=z(new Ie(27,.28,7,48),g,[0,58,0],[Math.PI/2,0,0]);for(let v of[_,m,f])v.visible=!1,v.userData.baseScale=v.scale.clone(),s.add(v),l.barrier.push(v);return l.barrierShell=_,l.barrierRings=[m,f],s.userData=l,s}var Il=class{constructor(t,e){this.game=t,this.type="boss",this.bossKind="ultra",this.targetName="EVIL ULTRAMAN",this.hudLabel="EVIL ULTRAMAN // 110M \u767D\u7070\u90AA\u795E",this.hudGradient="linear-gradient(90deg,#eef4ff,#a88aff 52%,#ff315d)",this.radarColor="#c7b7ff",this.group=gg(),this.group.position.copy(e),this.group.position.y+=.5,t.scene.add(this.group),this.parts=this.group.userData,this.hp=this.maxHp=t.training?6e3:8500,this.radius=29,this.value=3e4,this.dead=!1,this.time=0,this.phase=1,this.attackState="idle",this.pending="beam",this.attackTimer=1.8,this.attackClock=0,this.damageTick=0,this.beamTick=0,this.beamTarget=new R,this.dashDir=new R,this.dashHit=!1,this.moveAmount=0,this.barrierActive=!1,this.barrierTimer=0,this.barrierCooldown=2.8,this.barrierFlash=0,this.shieldMsg=0,this.hitMsg=0,this.armorBurst=0}aimPosition(t=ni()){return this.parts.core.getWorldPosition(t)}hitSpheres(){let t=[];return this.barrierActive&&t.push({center:this.group.localToWorld(new R(0,26,0)),radius:28},{center:this.group.localToWorld(new R(0,59,0)),radius:33},{center:this.group.localToWorld(new R(0,91,0)),radius:25}),t.push({center:this.parts.head.getWorldPosition(new R),radius:9.2},{center:this.parts.core.getWorldPosition(new R),radius:5.2},{center:this.group.localToWorld(new R(0,73,0)),radius:19},{center:this.group.localToWorld(new R(0,51,0)),radius:15}),t}setBarrier(t){this.barrierActive=t;for(let e of this.parts.barrier)e.visible=t,t||(e.material.opacity=0);if(t){this.barrierFlash=.24,this.parts.barrierShell.material.opacity=.24;for(let e of this.parts.barrierRings)e.material.opacity=.54}}beginAttack(t){if(this.pending=t,this.attackState="telegraph",this.attackClock=t==="shield"?.48:t==="beam"?.92:.62,t==="shield"){for(let e of this.parts.barrier)e.visible=!0,e.material.opacity=.08;this.game.message("ULTRA BARRIER","\u53CC\u81C2\u84C4\u80FD // \u653B\u51FB\u5373\u5C06\u88AB\u683C\u6321",760)}else t==="beam"?this.game.message("EVIL ULTRA BEAM","\u8155\u90E8\u5C04\u7EBF\u9501\u5B9A // \u6A2A\u5411\u673A\u52A8",900):this.game.message("TITAN RUSH","\u4F53\u672F\u51B2\u523A // \u62C9\u5347\u6216\u6025\u8F6C",760);this.game.audio.tone(t==="shield"?420:t==="beam"?112:68,this.attackClock,"sawtooth",.18,t==="beam"?2.8:.7)}executeAttack(){let t=this.game.player;this.pending==="shield"?(this.attackState="barrier",this.barrierTimer=1.25+this.phase*.12,this.barrierCooldown=6.5-this.phase*.45,this.setBarrier(!0),this.game.fx.shockwave(this.group.position.clone(),12100351,62),this.game.audio.tone(680,.34,"sine",.18,1.8)):this.pending==="beam"?(this.attackState="beam",this.attackClock=1.15+this.phase*.12,this.damageTick=0,this.beamTick=0,this.beamTarget.copy(t.group.position).addScaledVector(t.velocity,.2)):(this.attackState="dash",this.attackClock=.62+this.phase*.07,this.dashHit=!1,this.dashDir.set(t.group.position.x-this.group.position.x,0,t.group.position.z-this.group.position.z),this.dashDir.lengthSq()<.01&&this.dashDir.set(0,0,-1).applyQuaternion(this.group.quaternion),this.dashDir.normalize(),this.game.fx.shockwave(this.group.position.clone(),16725599,48),this.game.cameraKick=Math.min(1.35,this.game.cameraKick+.7))}meleeImpact(){if(this.dashHit)return;let t=this.game.player,e=this.group.localToWorld(new R(0,57,-17)),i=t.group.position.clone().sub(e),n=37+this.phase*3;i.length()<n&&(this.dashHit=!0,this.game.damage(38+this.phase*10,e),i.lengthSq()<.01&&i.set(0,.2,-1).applyQuaternion(this.group.quaternion),t.velocity.add(i.normalize().multiplyScalar(62+this.phase*7)),this.game.cameraKick=Math.min(1.6,this.game.cameraKick+1.05),this.game.hitstop=Math.max(this.game.hitstop,.055)),this.game.fx.shockwave(this.group.position.clone(),16728428,58+this.phase*5),this.game.fx.sparks(e,15133183,28),this.game.audio.explosion(!0)}update(t){if(this.dead)return;this.time+=t,this.barrierCooldown-=t,this.barrierFlash=Math.max(0,this.barrierFlash-t),this.shieldMsg-=t,this.hitMsg-=t,this.armorBurst=Math.max(0,this.armorBurst-t);let e=this.game.player,i=e.group.position.x-this.group.position.x,n=e.group.position.z-this.group.position.z,r=Math.hypot(i,n),a=Math.atan2(-i,-n),o=Math.atan2(Math.sin(a-this.group.rotation.y),Math.cos(a-this.group.rotation.y));if(this.attackState!=="dash"&&(this.group.rotation.y+=o*(1-Math.exp(-(1.75+this.phase*.12)*t))),this.moveAmount=0,this.attackState==="idle"&&r>58){let m=sn.set(i,0,n).normalize(),f=Math.min(30+this.phase*3,Math.max(8,(r-48)*.34));this.group.position.addScaledVector(m,f*t),this.moveAmount=f}else if(this.attackState==="dash"){let m=90+this.phase*11;this.group.position.addScaledVector(this.dashDir,m*t),this.moveAmount=m;let f=this.group.localToWorld(new R(0,57,-15));!this.dashHit&&f.distanceTo(e.group.position)<31+this.phase*2&&this.meleeImpact()}let c=this.hp<this.maxHp*.34?3:this.hp<this.maxHp*.67?2:1;if(c!==this.phase&&(this.phase=c,this.armorBurst=.72,this.attackState="barrier",this.barrierTimer=.92,this.barrierCooldown=4.8-this.phase*.4,this.setBarrier(!0),this.game.message(`EVIL PHASE ${c}`,c===3?"\u90AA\u80FD\u66B4\u8D70 // \u5C4F\u969C\u4E0E\u4F53\u672F\u5F3A\u5316":"\u94F6\u7070\u88C5\u7532\u8FC7\u8F7D // \u5965\u7279\u5C4F\u969C\u5C55\u5F00",1700,!0),this.game.fx.explosion(this.aimPosition(new R),10976511,!0),this.game.fx.shockwave(this.group.position.clone(),15199999,72),this.game.audio.explosion(!0)),this.attackState==="idle"){if(this.attackTimer-=t,this.attackTimer<=0){let m=Math.random(),f=this.barrierCooldown<=0&&(this.game.input.fire||m<.3)?"shield":r>115||e.group.position.y>78||m<.49?"beam":"dash";this.beginAttack(f)}}else if(this.attackState==="telegraph"){if(this.attackClock-=t,this.pending==="shield"){let m=1-Bt(this.attackClock/.48,0,1);for(let f of this.parts.barrier)f.material.opacity=.05+m*.13}this.attackClock<=0&&this.executeAttack()}else if(this.attackState==="barrier")this.barrierTimer-=t,this.barrierTimer<=0&&(this.setBarrier(!1),this.attackState="idle",this.attackTimer=.8);else if(this.attackState==="beam"){this.attackClock-=t,this.beamTick-=t,this.damageTick-=t;let m=this.parts.beamMuzzle.getWorldPosition(new R),f=e.group.position.clone().addScaledVector(e.velocity,.2);this.beamTarget.lerp(f,1-Math.exp(-(1.55+this.phase*.16)*t)),this.beamTick<=0&&(this.beamTick=.07,this.game.fx.bossBeam(m,this.beamTarget,12110335),this.game.fx.trail(m,15265791),this.game.cameraKick=Math.min(1.15,this.game.cameraKick+.038)),this.damageTick<=0&&ja(m,this.beamTarget,e.group.position)<81&&(this.damageTick=.2,this.game.damage(16+this.phase*4,m)),this.attackClock<=0&&(this.attackState="idle",this.attackTimer=1.65-this.phase*.18)}else this.attackState==="dash"?(this.attackClock-=t,this.attackClock<=0&&(this.meleeImpact(),this.attackState="recover",this.attackClock=.42)):this.attackState==="recover"&&(this.attackClock-=t,this.attackClock<=0&&(this.attackState="idle",this.attackTimer=1.15-this.phase*.12));let l=Math.sin(this.time*(2.5+Math.min(this.moveAmount,45)*.075)),h=Bt(this.moveAmount/38,0,1);this.parts.legs[0].rotation.x=Zt(this.parts.legs[0].rotation.x,l*.32*h,7,t),this.parts.legs[1].rotation.x=Zt(this.parts.legs[1].rotation.x,-l*.32*h,7,t);let u=-.08+l*.14*h,d=.08-l*.14*h,p=0,g=0;this.attackState==="barrier"||this.pending==="shield"&&this.attackState==="telegraph"?(u=1.28,d=-1.28,p=g=-.08):this.attackState==="beam"||this.pending==="beam"&&this.attackState==="telegraph"?(u=1.22,d=-1.42,p=-.24,g=.12):(this.attackState==="dash"||this.attackState==="recover"||this.pending==="dash"&&this.attackState==="telegraph")&&(u=-.18,d=.18,p=g=.78),this.parts.arms[0].rotation.z=Zt(this.parts.arms[0].rotation.z,u,9,t),this.parts.arms[1].rotation.z=Zt(this.parts.arms[1].rotation.z,d,9,t),this.parts.arms[0].rotation.x=Zt(this.parts.arms[0].rotation.x,p,9,t),this.parts.arms[1].rotation.x=Zt(this.parts.arms[1].rotation.x,g,9,t),this.parts.head.rotation.y=Math.sin(this.time*.7)*.08,this.parts.coreRing.rotation.z+=t*(1.2+this.phase*.35),this.parts.coreRing.scale.setScalar(1+Math.sin(this.time*4.4)*.07),this.parts.coreMesh.material.emissiveIntensity=1.2+this.phase*.55+Math.sin(this.time*6)*.22,this.parts.coreLight.intensity=9+this.phase*4+Math.sin(this.time*7)*2;for(let m=0;m<this.parts.barrierRings.length;m++)this.parts.barrierRings[m].rotation.z+=t*(m?.75:-.58);if(this.barrierActive){let m=.94+Math.sin(this.time*8)*.035;for(let f of this.parts.barrier)f.scale.copy(f.userData.baseScale).multiplyScalar(m);this.parts.barrierShell.material.opacity=.2+(this.barrierFlash>0?.32:.06)+Math.sin(this.time*7)*.035;for(let f of this.parts.barrierRings)f.material.opacity=.42+(this.barrierFlash>0?.28:.04)}let _=this.group.localToWorld(new R(0,58,0));if(_.distanceTo(e.group.position)<this.radius+3&&e.damageCd<=0){this.game.damage(34+this.phase*5,_);let m=e.group.position.clone().sub(_);m.lengthSq()<.01&&m.set(0,.2,-1).applyQuaternion(this.group.quaternion),e.velocity.add(m.normalize().multiplyScalar(48))}}damage(t,e){if(this.dead)return 0;let i=e||this.aimPosition(new R);if(this.barrierActive)return this.barrierFlash=.2,this.game.fx.sparks(i,15199743,22),this.game.fx.sparks(i,10254079,12),this.game.audio.tone(520,.075,"square",.09,1.8),this.shieldMsg<=0&&(this.shieldMsg=.55,this.game.message("ULTRA BARRIER","ATTACK NULLIFIED // \u5965\u7279\u5C4F\u969C\u683C\u6321",520)),0;let n=this.parts.core.getWorldPosition(new R),r=i.distanceTo(n)<5.9,a=this.phase===1?1:this.phase===2?.92:.84,o=t*(r?1.58:.56)*a*(this.armorBurst>0?.22:1);return this.hp-=o,this.game.hitMarker(!1),this.game.fx.sparks(i,r?16733566:14476782,r?20:8),this.hitMsg<=0&&(this.hitMsg=r?.5:.9,this.game.message(r?"DARK CORE BREAK":"SILVER ARMOR",r?`CRITICAL \xD71.58 // ${Math.max(0,Math.ceil(this.hp))} HP`:"\u7784\u51C6\u7D2B\u8272\u80F8\u706F\u6838\u5FC3",r?560:680)),this.hp<=0&&this.destroy(),o}destroy(){if(this.dead)return;this.dead=!0,this.hp=0,this.setBarrier(!1),this.game.bossDefeated=!0,this.game.bossStage=2,this.game.bossKills++,this.game.kills+=12;let t=Math.round(this.value*this.game.combo);this.game.score+=t,this.game.combo=Math.min(9.9,this.game.combo+2.8),this.game.bestCombo=Math.max(this.game.bestCombo,this.game.combo);let e=this.group.position.clone();for(let i of[[0,8,0],[-8,31,2],[9,52,-4],[-11,74,1],[10,88,-3],[0,103,-5],[0,66,-10]])this.game.fx.explosion(e.clone().add(new R(...i)),Math.random()>.5?15331327:10381311,!0);this.game.audio.explosion(!0),this.game.hitMarker(!0),this.game.message("DOUBLE TITAN CLEAR",`+${t.toLocaleString()} // \u90AA\u6076\u5965\u7279\u66FC\u51FB\u7834`,3200,!0),this.game.player.shield=this.game.player.maxShield,this.game.player.hull=Math.min(this.game.player.maxHull,this.game.player.hull+45),this.game.player.boost=100,setTimeout(()=>{this.group.parent&&this.game.scene.remove(this.group)},1650),this.game.lockTarget===this&&(this.game.lockTarget=null)}},Pl=class{constructor(t){this.scene=t,this.items=[],this.rails=[],this.particles=[],this.max=_i?520:1300,this.pos=new Float32Array(this.max*3),this.col=new Float32Array(this.max*3),this.geo=new Me,this.geo.setAttribute("position",new Re(this.pos,3)),this.geo.setAttribute("color",new Re(this.col,3)),this.points=new Kn(this.geo,new xn({size:.36,vertexColors:!0,transparent:!0,opacity:.9,blending:oe,depthWrite:!1})),t.add(this.points),this.railCoreGeo=new $t(.1,.1,1,8),this.railGlowGeo=new $t(.44,.44,1,8,1,!0),this.flashGeo=new bi(.72,2)}addParticle(t,e,i,n,r=1){this.particles.length>=this.max&&this.particles.shift(),this.particles.push({pos:t.clone(),vel:e.clone(),color:new Rt(i),life:n,max:n,size:r})}sparks(t,e,i=16){for(let n=0;n<i;n++)this.addParticle(t,Te.set(pt(-1,1),pt(-1,1),pt(-1,1)).normalize().multiplyScalar(pt(8,34)),e,pt(.25,.75))}trail(t,e){this.addParticle(t,Te.set(pt(-.4,.4),pt(-.4,.4),pt(-.4,.4)),e,pt(.25,.5))}railBeam(t,e,i=1){let n=e.clone().sub(t),r=n.length(),a=t.clone().add(e).multiplyScalar(.5),o=new Ht,c=new xe(this.railCoreGeo,new Qt({color:16775391,transparent:!0,opacity:1,toneMapped:!1,fog:!1,blending:oe,depthWrite:!1})),l=new xe(this.railGlowGeo,new Qt({color:4385535,transparent:!0,opacity:.72,toneMapped:!1,fog:!1,blending:oe,depthWrite:!1})),h=.92+i*.22;c.scale.set(.82+i*.2,r,.82+i*.2),l.scale.set(h,r,h),o.add(l,c),o.position.copy(a),o.quaternion.setFromUnitVectors(Qa,n.normalize()),this.scene.add(o);let u=.142+i*.018;this.rails.push({kind:"beam",group:o,core:c,glow:l,width:h,power:i,life:u,max:u});let d=Math.round(7+i*4);for(let p=1;p<d;p++){let g=t.clone().lerp(e,p/d);this.addParticle(g,Te.set(pt(-.8,.8),pt(-.8,.8),pt(-.8,.8)),p%2?10287103:16767370,pt(.2,.38))}}novaBeam(t,e,i=1){this.railBeam(t,e,i*1.06);let n=this.rails[this.rails.length-1];n.life=n.max=.115+i*.012,n.nova=!0,n.width=.88+i*.18,n.core.material.color.setHex(16777167),n.glow.material.color.setHex(16729503),n.core.scale.x=n.core.scale.z=1.55+i*.22}bossBeam(t,e,i=16725664){this.railBeam(t,e,1.2);let n=this.rails[this.rails.length-1];n.life=n.max=.14,n.boss=!0,n.core.material.color.setHex(15400959),n.glow.material.color.setHex(i),n.glow.material.opacity=.82,n.glow.scale.x=n.glow.scale.z=2.2}shockwave(t,e,i=142){let n=new Qt({color:e,transparent:!0,opacity:.9,toneMapped:!1,blending:oe,depthWrite:!1,side:qe}),r=z(new Ie(1,.16,8,64),n,[t.x,t.y+1,t.z],[Math.PI/2,0,0]);this.scene.add(r),this.rails.push({kind:"ring",group:r,material:n,radius:i,life:1.05,max:1.05})}muzzleFlash(t,e,i=16774095,n=1){let r=new xe(this.flashGeo,new Qt({color:i,transparent:!0,opacity:1,toneMapped:!1,blending:oe,depthWrite:!1}));r.position.copy(t).addScaledVector(e,.3+.08*n),r.quaternion.setFromUnitVectors(us,e);let a=27*n,o=new li(i,a,17+n*7,2);o.position.copy(t),this.scene.add(r,o);let c=.06+n*.012;this.rails.push({kind:"flash",flash:r,light:o,power:n,peak:a,life:c,max:c}),this.sparks(t,i,Math.round(7+n*5))}weaponImpact(t,e,i=1){let n=new xe(new bi(.38*i,1),new Qt({color:e,wireframe:!0,transparent:!0,opacity:1,toneMapped:!1,blending:oe,depthWrite:!1}));n.position.copy(t);let r=14*i,a=new li(e,r,16+i*10,2);a.position.copy(t),this.scene.add(n,a);let o=.13+i*.055;this.rails.push({kind:"impact",shell:n,light:a,peak:r,expansion:3.2+i*2.2,life:o,max:o}),this.sparks(t,e,Math.round(11+i*10))}plasmaImpact(t,e=1){this.weaponImpact(t,16753759,e),this.sparks(t,16731807,Math.round(5+e*5))}novaImpact(t,e=1){this.weaponImpact(t,16734381,e),this.sparks(t,16773018,Math.round(8+e*7))}railImpact(t,e,i=1){let n=new xe(new bi((e?.58:.4)*i,1),new Qt({color:e?16773324:8187903,wireframe:!0,transparent:!0,opacity:1,toneMapped:!1,blending:oe,depthWrite:!1}));n.position.copy(t);let r=(e?20:12)*i,a=new li(e?16751180:6156287,r,22+i*9,2);a.position.copy(t),this.scene.add(n,a);let o=(e?.22:.16)+i*.025;this.rails.push({kind:"impact",shell:n,light:a,peak:r,expansion:3.8+i*2.1,life:o,max:o}),this.sparks(t,e?16770736:7139327,Math.round((e?24:15)*i))}explosion(t,e,i=!1){this.sparks(t,e,i?58:30);let n=z(new bi(1,2),new Qt({color:e,transparent:!0,opacity:.85,wireframe:!0,blending:oe,depthWrite:!1}),t.toArray());this.scene.add(n);let r=new li(e,i?22:12,i?55:30,2);r.position.copy(t),this.scene.add(r),this.items.push({mesh:n,light:r,life:i?.75:.48,max:i?.75:.48,big:i})}removeRail(t){let e=i=>{Array.isArray(i)?i.forEach(n=>n.dispose()):i?.dispose()};t.group&&(this.scene.remove(t.group),t.group.traverse(i=>{i.isMesh&&(e(i.material),t.kind==="ring"&&i.geometry?.dispose())})),t.flash&&(this.scene.remove(t.flash,t.light),e(t.flash.material)),t.shell&&(this.scene.remove(t.shell,t.light),t.shell.geometry?.dispose(),e(t.shell.material))}update(t){for(let i of this.particles)i.life-=t,i.pos.addScaledVector(i.vel,t),i.vel.multiplyScalar(Math.exp(-1.8*t)),i.vel.y-=5*t;this.particles=this.particles.filter(i=>i.life>0);let e=0;for(let i of this.particles){this.pos[e*3]=i.pos.x,this.pos[e*3+1]=i.pos.y,this.pos[e*3+2]=i.pos.z;let n=i.life/i.max;this.col[e*3]=i.color.r*n,this.col[e*3+1]=i.color.g*n,this.col[e*3+2]=i.color.b*n,e++}for(;e<this.max;e++)this.pos[e*3]=this.pos[e*3+1]=this.pos[e*3+2]=99999;this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0;for(let i of this.rails){i.life-=t;let n=Bt(i.life/i.max,0,1);if(i.kind==="beam"){i.core.material.opacity=Math.min(1,n*2.7),i.glow.material.opacity=(i.boss?.86:i.nova?.8:.64)*Math.pow(n,1.24);let r=i.boss?2.15:i.width||1,a=r+(1-n)*(i.boss?1.1:i.nova?.48:.65);i.glow.scale.x=i.glow.scale.z=a}else if(i.kind==="flash"){i.flash.material.opacity=n;let r=(i.power||1)*(.9+(1-n)*2.2);i.flash.scale.set(r,r,r*(1.25+n*.45)),i.light.intensity=(i.peak||24)*n}else i.kind==="ring"?(i.material.opacity=Math.sin(n*Math.PI)*.92,i.group.scale.setScalar(3+(1-n)*i.radius)):i.shell&&(i.shell.material.opacity=n,i.shell.scale.setScalar(1+(1-n)*(i.expansion||3.5)),i.light.intensity=(i.peak||16)*n)}for(let i of this.rails.filter(n=>n.life<=0))this.removeRail(i);this.rails=this.rails.filter(i=>i.life>0);for(let i of this.items){i.life-=t;let n=1-i.life/i.max;i.mesh.scale.setScalar(1+n*(i.big?13:7)),i.mesh.material.opacity=Math.max(0,(1-n)*.8),i.light.intensity*=Math.exp(-7*t)}for(let i of this.items.filter(n=>n.life<=0))this.scene.remove(i.mesh,i.light),i.mesh.geometry.dispose(),i.mesh.material.dispose();this.items=this.items.filter(i=>i.life>0)}clear(){for(let t of this.items)this.scene.remove(t.mesh,t.light);for(let t of this.rails)this.removeRail(t);this.items=[],this.rails=[],this.particles=[]}};function ja(s,t,e){let i=Te.copy(t).sub(s),n=zi.copy(e).sub(s),r=i.lengthSq(),a=r?Bt(n.dot(i)/r,0,1):0;return sn.copy(s).addScaledVector(i,a).distanceToSquared(e)}function xg(s,t,e,i=new R){let n=t.clone().sub(s),r=n.lengthSq(),a=r?Bt(e.clone().sub(s).dot(n)/r,0,1):0;return i.copy(s).addScaledVector(n,a)}function _g(s,t=1){return z(new $t(.075,.075,2.8,5),new Qt({color:s,blending:oe}),[0,0,0],[Math.PI/2,0,0],[t,t,t])}var Ll=class{constructor(){this.mobile=_i,this.pixelRatioCap=this.mobile?1.15:1.6,this.viewport=Ja(),this.canvas=ut("#game"),this.canvas.style.left=this.viewport.left+"px",this.canvas.style.top="0",this.canvas.style.right="auto",this.canvas.style.bottom="auto",this.renderer=new Va({canvas:this.canvas,antialias:!this.mobile,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.pixelRatioCap)),this.renderer.setSize(this.viewport.renderWidth,this.viewport.height),this.renderer.outputColorSpace=Xe,this.renderer.toneMapping=ts,this.renderer.toneMappingExposure=.88,this.scene=new Is,this.scene.background=new Rt(525592),this.scene.fog=new Cs(1641515,.0039),this.camera=new Fe(72,this.viewport.renderWidth/this.viewport.height,.08,1700),this.camera.position.set(0,44,4),this.cameraVel=ni(),this.cameraKick=0,this.cameraRecoil=0,this.scene.add(this.camera),this.scene.add(new Bs(10219519,2623263,2.35));let t=new jn(11922175,3.4);t.position.set(-80,140,90),this.scene.add(t);let e=new jn(16731293,1.45);e.position.set(90,30,-80),this.scene.add(e),this.composer=new qa(this.renderer),this.composer.addPass(new Ya(this.scene,this.camera)),this.bloom=new hs(new wt(this.viewport.renderWidth,this.viewport.height),this.mobile?.5:.58,this.mobile?.24:.32,.78),this.composer.addPass(this.bloom),this.composer.addPass(new Za),this.audio=new Sl,this.input=new bl(this.canvas,this),this.player=new El(this.scene),this.player.group.visible=!1,this.cockpit=new Tl(this.camera),this.cameraMode="chase",this.fx=new Pl(this.scene),this.city=new wl(this.scene,this),this.enemies=[],this.fugitives=[],this.boss=null,this.projectiles=[],this.weaponMode=0,this.weaponNames=["RAIL CANNON","PLASMA REPEATER","NOVA SCATTER"],this.weaponLabels=["\u7CBE\u51C6\u8D2F\u7A7F // 650m","\u9AD8\u901F\u7B49\u79BB\u5B50 // \u6301\u7EED\u706B\u529B","\u4E5D\u8054\u6563\u5C04 // \u8FD1\u8DDD\u7206\u53D1"],this.plasmaGeo=new $t(.24,.34,3.2,8),this.plasmaGlowGeo=new $t(.58,.58,2.7,8,1,!0),this.plasmaMat=new Qt({color:16768906,toneMapped:!1,blending:oe}),this.plasmaGlowMat=new Qt({color:16731807,transparent:!0,opacity:.34,toneMapped:!1,blending:oe,depthWrite:!1}),this.state="menu",this.stateBeforeStealth="running",this.score=0,this.wave=1,this.kills=0,this.captures=0,this.bossKills=0,this.combo=1,this.bestCombo=1,this.spawnTimer=0,this.fugitiveTimer=0,this.bossSpawnTimer=0,this.bossStage=0,this.nextBossTimer=0,this.bossDefeated=!1,this.eliteUsed=!1,this.lockTarget=null,this.lockTime=0,this.shotCd=0,this.muzzleSide=0,this.training=!0,this.boosting=!1,this.shielding=!1,this.damageFlash=0,this.hitstop=0,this.last=performance.now(),this.lastRender=0,this.hudCd=0,this.acc=0,this.radar=ut("#radarCanvas").getContext("2d"),this.bindUI(),addEventListener("resize",()=>this.resize()),document.addEventListener("fullscreenchange",()=>this.resize()),document.addEventListener("webkitfullscreenchange",()=>this.resize()),requestAnimationFrame(i=>this.loop(i))}bindUI(){let t=!1,e=n=>{if(t)return;t=!0,this.audio.start();let r=()=>{t=!1,n()};this.mobile?this.enterImmersive().finally(r):r()},i=()=>e(()=>this.start());ut("#start").onclick=i,ut("#restart").onclick=i,ut("#resume").onclick=()=>e(()=>this.resume()),ut("#stealthResume").onclick=()=>this.hideStealth(),ut("#training").onclick=()=>{this.training=!this.training,ut("#training").textContent=`\u8BAD\u7EC3\u6A21\u5F0F\uFF1A${this.training?"\u5F00":"\u5173"}`}}resize(){let t=Ja();this.viewport=t,this.canvas.style.left=t.left+"px",this.canvas.style.top="0",this.canvas.style.right="auto",this.canvas.style.bottom="auto",this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.pixelRatioCap)),this.renderer.setSize(t.renderWidth,t.height),this.composer.setSize(t.renderWidth,t.height),this.camera.aspect=t.renderWidth/t.height,this.camera.updateProjectionMatrix()}enterMobileMode(){this.input.clearTouchState(),this.resize()}async enterImmersive(){if(!this.mobile)return!1;let t=document.documentElement,e=document.fullscreenElement||document.webkitFullscreenElement,i=t.requestFullscreen||t.webkitRequestFullscreen;if(!e&&i)try{await i.call(t,{navigationUI:"hide"})}catch{try{await i.call(t)}catch{}}try{screen.orientation?.lock?.("landscape")?.catch?.(()=>{})}catch{}return setTimeout(()=>{this.resize(),this.input.syncOrientation()},80),!!(document.fullscreenElement||document.webkitFullscreenElement)}toggleCamera(){this.cameraMode=this.cameraMode==="cockpit"?"chase":"cockpit",this.cockpit.group.visible=this.cameraMode==="cockpit",this.player.group.visible=this.cameraMode==="chase"&&this.player.alive,this.cameraVel.set(0,0,0),this.state==="running"&&this.message(this.cameraMode==="cockpit"?"COCKPIT VIEW":"CHASE VIEW","V \u5207\u6362\u89C6\u89D2")}cycleWeapon(){if(this.state!=="running"||!this.player.alive)return;this.weaponMode=(this.weaponMode+1)%3,this.player.setWeaponForm(this.weaponMode),this.shotCd=Math.max(this.shotCd,.18),this.audio.morph(),this.cameraKick=Math.min(.45,this.cameraKick+.16),ut("#weaponName").textContent=this.weaponNames[this.weaponMode],ut("#heatText").textContent=["READY","RAPID","CHARGED"][this.weaponMode];let t=[6680575,16757855,16732063][this.weaponMode];for(let e of this.player.muzzles){let i=new R;e.getWorldPosition(i),this.fx.sparks(i,t,10)}this.message("WEAPON MORPH",`${this.weaponNames[this.weaponMode]} // ${this.weaponLabels[this.weaponMode]}`,1250)}upgradeJet(){if(this.state!=="running"||!this.player.alive)return;if(this.player.elite){this.message("AURORA PRIME ACTIVE","\u8C6A\u534E\u6218\u673A\u5DF2\u5904\u4E8E\u5B8C\u5168\u4F53");return}if(!this.player.setElite(!0))return;this.eliteUsed=!0,this.cameraMode="chase",this.cockpit.group.visible=!1,this.player.group.visible=!0,this.cameraKick=1.05,this.cameraRecoil=.04,this.hitstop=.08,this.fx.explosion(this.player.group.position,16764777,!0),this.fx.shockwave(this.player.group.position,7337727),this.audio.tone(84,.7,"sawtooth",.2,5.4),this.audio.tone(960,.32,"sine",.12,1.8);let t=ut("#flash");t.style.transition="none",t.style.opacity=.82,requestAnimationFrame(()=>{t.style.transition="opacity .7s",t.style.opacity=0}),this.message("AURORA PRIME","\u4E09\u5F62\u6001\u6B66\u5668\u8FC7\u8F7D // \u53F3\u952E\u5207\u6362\u4E3B\u70AE",2300,!0)}start(){this.audio.start(),this.state="running",this.score=0,this.wave=1,this.kills=0,this.captures=0,this.bossKills=0,this.combo=1,this.bestCombo=1,this.spawnTimer=.18,this.fugitiveTimer=.35,this.bossSpawnTimer=this.training?3.4:5.5,this.bossStage=0,this.nextBossTimer=0,this.bossDefeated=!1,this.eliteUsed=!1,this.weaponMode=0,this.lockTarget=null,this.lockTime=0,this.shotCd=0,this.player.reset(),this.player.setWeaponForm(0),this.player.group.visible=!1,this.city.reset(),this.input.reset(),this.clearCombat(),this.fx.clear(),ut("#boot").classList.add("hidden"),ut("#gameover").style.display="none",ut("#pause").style.display="none",ut("#stealth").classList.remove("on"),ut("#hud").style.display="block",ut("#hud").style.visibility="visible",this.canvas.style.visibility="visible",this.mobile?this.enterMobileMode():this.input.tryLock(),this.message("\u5F15\u64CE\u4E0A\u7EBF",this.mobile?"\u5DE6\u6447\u6746\u98DE\u884C // \u53F3\u4FA7\u62D6\u52A8\u8F6C\u5411 // \u6309\u4F4F\u5F00\u706B":"\u53F3\u952E\u5207\u6362\u4E3B\u70AE // Shift \u52A0\u901F // G \u8C6A\u534E\u6218\u673A"),this.player.group.visible=this.cameraMode==="chase",this.cockpit.group.visible=this.cameraMode==="cockpit",this.camera.position.set(0,44,4),this.camera.quaternion.identity(),this.cameraVel.set(0,0,0),this.cameraRecoil=this.hitstop=0}clearCombat(){for(let t of this.enemies)this.scene.remove(t.group);for(let t of this.fugitives)this.scene.remove(t.group);this.boss?.group&&this.scene.remove(this.boss.group);for(let t of this.projectiles)this.scene.remove(t.mesh);this.enemies=[],this.fugitives=[],this.boss=null,this.projectiles=[]}pause(){this.state==="running"&&(this.state="paused",this.input.clearTouchState(),ut("#pause").style.display="grid")}resume(){this.state==="paused"&&(this.state="running",ut("#pause").style.display="none",this.input.tryLock(),this.last=performance.now())}showStealth(){if(!["running","paused"].includes(this.state))return;this.stateBeforeStealth=this.state,this.state="stealth",this.input.clearTouchState(),this.input.boostMouse=!1,ut("#pause").style.display="none",ut("#stealth").classList.add("on"),ut("#hud").style.visibility="hidden",this.canvas.style.visibility="hidden";let t=new Date,e=i=>String(i).padStart(2,"0");ut("#sheetTime").textContent=`${t.getFullYear()}/${e(t.getMonth()+1)}/${e(t.getDate())} ${e(t.getHours())}:${e(t.getMinutes())}`,document.pointerLockElement&&document.exitPointerLock?.()}hideStealth(){this.state==="stealth"&&(ut("#stealth").classList.remove("on"),ut("#hud").style.visibility="visible",this.canvas.style.visibility="visible",this.state="running",this.last=performance.now(),this.acc=0,this.input.tryLock())}end(){this.state!=="over"&&(this.state="over",this.input.clearTouchState(),document.exitPointerLock?.(),ut("#stealth").classList.remove("on"),this.canvas.style.visibility="visible",ut("#hud").style.display="none",ut("#gameover").style.display="grid",ut("#finalScore").textContent=Math.round(this.score).toLocaleString(),ut("#bestCombo").textContent="\xD7"+this.bestCombo.toFixed(1),ut("#finalWave").textContent=String(this.wave).padStart(2,"0"),this.audio.explosion(!0))}spawnEnemy(t=null,e=null){let i=this.mobile?this.boss&&!this.boss.dead?5:Math.min(this.training?9:12,7+this.wave):this.boss&&!this.boss.dead?6:Math.min(this.training?12:17,8+this.wave*2);if(this.enemies.filter(_=>!_.dead).length>=i)return;let n=t||(Math.random()<Math.min(.2+this.wave*.03,.48)?"gunship":"scout"),r=this.player,a=r.forward(Te),o=r.right(zi),c=r.up(rn),l=Math.random()<.72?pt(-1.65,1.65):pt(-Math.PI,Math.PI),h=pt(-.38,.38),u=Math.cos(h),d=pt(105,205),p=sn.copy(a).multiplyScalar(Math.cos(l)*u).addScaledVector(o,Math.sin(l)*u).addScaledVector(c,Math.sin(h)).normalize(),g=e||r.group.position.clone().addScaledVector(p,d);g.y=Bt(g.y,12,185),this.enemies.push(new Al(this,n,g))}spawnFugitive(){let t=this.mobile?this.training?7:9:this.training?9:13;if(this.fugitives.filter(l=>!l.dead).length>=t)return;let e=this.player,i=e.group.position.clone().addScaledVector(e.forward(new R),pt(65,175)).addScaledVector(e.right(new R),pt(-90,90)),n=Math.round(i.x/120)*120,r=Math.round(i.z/120)*120,a=Math.random()>.5,o=new R,c=new R;a?(o.set(Bt(i.x,n-52,n+52),.05,r+(Math.random()>.5?7:-7)),c.set(Math.random()>.5?1:-1,0,0)):(o.set(n+(Math.random()>.5?7:-7),.05,Bt(i.z,r-52,r+52)),c.set(0,0,Math.random()>.5?1:-1)),this.fugitives.push(new Rl(this,o,c))}spawnBoss(t="kaiju"){if(this.boss&&!this.boss.dead||this.bossDefeated)return null;let e=this.player,i=e.forward(new R);i.y=0,i.lengthSq()<.1&&i.set(0,0,-1),i.normalize();let n=t==="ultra"?285:255,r=e.group.position.clone().addScaledVector(i,n),a=new R(Math.round(r.x/120)*120,0,Math.round(r.z/120)*120);return t==="ultra"?(this.bossStage=1,this.nextBossTimer=0,this.boss=new Il(this,a),this.message("EVIL ULTRAMAN DESCENDS","110M \u767D\u7070\u90AA\u795E // \u5C4F\u969C\xB7\u5C04\u7EBF\xB7\u4F53\u672F",2700,!0),this.fx.shockwave(a.clone(),15199743,88),this.audio.tone(76,1.35,"sawtooth",.23,3.1),this.cameraKick=.95):(this.bossStage=0,this.boss=new Cl(this,a),this.message("CITY TITAN DETECTED","\u697C\u5B87\u7EA7\u602A\u517D\u8FDB\u5165\u6218\u533A // \u653B\u51FB\u53D1\u5149\u5F31\u70B9",2400,!0),this.audio.tone(58,1.2,"sawtooth",.22,.6),this.cameraKick=.65),this.boss}spawnUltraBoss(){return this.spawnBoss("ultra")}combatTargets(){let t=[...this.enemies,...this.fugitives];return this.boss&&t.push(this.boss),t.filter(e=>!e.dead)}targetPoint(t,e=ni()){return t.aimPosition?t.aimPosition(e):e.copy(t.group.position)}traceRail(t,e,i=650){let n=this.city.raycastDistance(t,e,i,.04),r=null;for(let a of this.combatTargets()){let o=a.hitSpheres?a.hitSpheres():[{center:this.targetPoint(a,new R),radius:a.radius}];for(let c of o){let l=c.center.clone().sub(t),h=l.dot(e);if(h<=0||h>=n)continue;let u=l.lengthSq()-h*h,d=c.radius+(a.type==="boss"?.35:1.05),p=d*d;u<=p&&(n=h-Math.sqrt(Math.max(0,p-u)),r=a)}}return{distance:n,enemy:r,point:t.clone().addScaledVector(e,n),hit:!!r||n<i-.02}}firePrimary(){this.weaponMode===0?this.fireCannon():this.weaponMode===1?this.firePlasma():this.fireNova()}schedulePrimary(t){let e=this.fireHeld?Bt(this.shotCd,-.016666666666666666,0):0;this.shotCd=t+e}fireCannon(){if(this.shotCd>0||this.player.heat>.96)return;let t=this.player.elite,e=t?1.42:1.2;this.schedulePrimary(t?.19:.23),this.player.heat=Math.min(1,this.player.heat+(t?.136:.1208)),this.muzzleSide=1-this.muzzleSide;let i=this.player.muzzles[this.muzzleSide],n=new R;i.getWorldPosition(n);let r=this.aimRay(),a=this.traceRail(r.origin,r.direction,650),o=a.point.clone().sub(n).normalize(),c=this.traceRail(n,o,650),l=t?this.player.muzzles:[i];for(let h of l){let u=new R;h.getWorldPosition(u);let d=c.point.clone().sub(u).normalize();this.fx.railBeam(u,c.point,e),this.fx.muzzleFlash(u,d,11467519,e)}this.audio.cannon(),t&&this.audio.tone(2460,.024,"square",.062,.22),this.cameraKick=Math.min(.86,this.cameraKick+(t?.25:.19)),this.cameraRecoil=Math.min(.078,this.cameraRecoil+(t?.034:.027)),c.hit&&(this.fx.railImpact(c.point,!!c.enemy,e),this.audio.impact(0,c.enemy?1:.68)),c.enemy&&(c.enemy.damage(t?112:96,c.point),this.hitstop=Math.max(this.hitstop,c.enemy.dead?t?.1:.086:t?.044:.038))}firePlasma(){if(this.shotCd>0||this.player.heat>.96)return;let t=this.player.elite,e=t?1.15:1;this.schedulePrimary(t?.045:.06),this.player.heat=Math.min(1,this.player.heat+(t?.0297:.0279)),this.muzzleSide=1-this.muzzleSide;let i=this.player.muzzles[this.muzzleSide],n=new R;i.getWorldPosition(n);let r=this.aimRay(),a=this.traceRail(r.origin,r.direction,540),o=a.point.clone().sub(n).normalize(),c=new Ht,l=new xe(this.plasmaGeo,this.plasmaMat),h=new xe(this.plasmaGlowGeo,this.plasmaGlowMat);c.add(h,l),c.scale.set(t?1.24:1.08,t?1.48:1.28,t?1.24:1.08),c.position.copy(n),this.scene.add(c),this.projectiles.push({mesh:c,pos:n.clone(),vel:o.multiplyScalar(t?240:210).addScaledVector(this.player.velocity,.14),life:2.55,owner:"player",damage:t?20:18,radius:t?.62:.52,plasma:!0,splash:t?7:5,feedback:e,old:n.clone()}),this.audio.plasma(),this.cameraKick=Math.min(.54,this.cameraKick+(t?.088:.072)),this.cameraRecoil=Math.min(.046,this.cameraRecoil+(t?.01:.008)),this.fx.muzzleFlash(n,o,16757855,t?.92:.76)}fireNova(){if(this.shotCd>0||this.player.heat>.96)return;let t=this.player.elite,e=t?1.4:1.18;this.schedulePrimary(t?.325:.39),this.player.heat=Math.min(1,this.player.heat+(t?.188:.185)),this.muzzleSide=1-this.muzzleSide;let i=this.aimRay(),n=i.direction.clone(),r=Ml.clone().applyQuaternion(this.camera.quaternion),a=Qa.clone().applyQuaternion(this.camera.quaternion),o=t?125:110,c=t?.05:.055,l=this.player.muzzles[this.muzzleSide],h=new R;l.getWorldPosition(h);let u=!1,d=!1,p=null;for(let g=0;g<9;g++){let _=n.clone();if(g){let f=(g-1)/8*Math.PI*2;_.addScaledVector(r,Math.cos(f)*c).addScaledVector(a,Math.sin(f)*c).normalize()}let m=this.traceRail(i.origin,_,o);(g===0||g===4||g===8)&&this.fx.novaBeam(h,m.point,e),m.enemy&&(m.enemy.damage(t?22:18,m.point),u=!0,d=d||m.enemy.dead,p||(p=m.point.clone()))}this.fx.muzzleFlash(h,n,16736946,e),this.audio.nova(),this.cameraKick=Math.min(1.04,this.cameraKick+(t?.52:.41)),this.cameraRecoil=Math.min(.095,this.cameraRecoil+(t?.064:.052)),u&&(this.fx.novaImpact(p,e),this.audio.impact(2,e),this.hitstop=Math.max(this.hitstop,d?.09:t?.06:.052))}fireMissile(){if(this.player.missileCd>0)return;this.player.missileCd=this.player.elite?1.8:3.2;let t=this.player.group.position.clone().addScaledVector(this.player.right(Te),this.muzzleSide?2.3:-2.3).addScaledVector(this.player.forward(zi),1.7),e=new Ht;e.add(z(new $t(.16,.24,2,7),Lt(1780021,1443342,.75,.3),[0,0,0],[Math.PI/2,0,0])),e.add(z(new Se(.25,.55,7),Lt(16735360,14423886,.3,.2),[0,0,-1.15],[Math.PI/2,0,0])),e.position.copy(t),this.scene.add(e);let i=this.player.forward(new R);this.projectiles.push({mesh:e,pos:t.clone(),vel:i.multiplyScalar(this.player.elite?105:72).addScaledVector(this.player.velocity,.3),life:5,owner:"player",damage:this.player.elite?216:144,radius:.55,missile:!0,target:this.lockTime>.65&&this.lockTarget?this.lockTarget:null,old:t.clone()}),this.audio.missile(),this.cameraKick+=.18}fireEnemy(t){let e=t.group.position.clone(),i=this.player.group.position.clone().addScaledVector(this.player.velocity,e.distanceTo(this.player.group.position)/105),n=i.sub(e).normalize(),r=t.type==="gunship"?11:7,a=_g(t.type==="gunship"?16725359:16752732,.9);a.position.copy(e),this.scene.add(a),this.projectiles.push({mesh:a,pos:e.clone(),vel:n.multiplyScalar(t.type==="gunship"?92:78),life:3.2,owner:"enemy",damage:r*(this.training?.42:1),radius:.45,old:e.clone()})}fireBossOrb(t,e,i=1,n=0){let r=e.clone().sub(t).normalize(),a=new Ht,o=z(new bi(1.45+i*.12,1),new Qt({color:16771317,toneMapped:!1,blending:oe})),c=z(new Ne(2.3+i*.22,10,7),new Qt({color:i===3?16720975:16727962,transparent:!0,opacity:.34,toneMapped:!1,blending:oe,depthWrite:!1}));a.add(o,c),a.position.copy(t),this.scene.add(a),this.projectiles.push({mesh:a,pos:t.clone(),vel:r.multiplyScalar(61+i*7),life:6,owner:"enemy",damage:18+i*4,radius:2.2+i*.18,old:t.clone(),bossOrb:!0,delay:n})}aimRay(){let t=new ks;return t.setFromCamera(new wt(this.input.aimX*.36,-this.input.aimY*.32),this.camera),t.ray}updateProjectiles(t){for(let e of this.projectiles){if(e.life-=t,e.delay>0){e.delay-=t,e.mesh.visible=!1;continue}e.mesh.visible=!0,e.old.copy(e.pos),e.trailCd=(e.trailCd||0)-t;let i=!this.mobile||e.trailCd<=0;if(i&&this.mobile&&(e.trailCd=.05),e.missile){if(e.target&&!e.target.dead){let n=this.targetPoint(e.target,Te).sub(e.pos).normalize().multiplyScalar(this.player.elite?122:92);e.vel.lerp(n,1-Math.exp(-4.8*t))}else e.vel.lerp(Te.copy(e.vel).normalize().multiplyScalar(this.player.elite?112:88),1-Math.exp(-1.2*t));i&&this.fx.trail(e.pos,this.player.elite?16765547:16735092)}if(e.bossOrb&&i&&this.fx.trail(e.pos,16727962),e.plasma&&i&&(this.fx.trail(e.pos,16764793),this.fx.trail(e.pos,16731807),Math.random()<.45&&this.fx.trail(rn.copy(e.vel).normalize().multiplyScalar(-1.6).add(e.pos),16777170)),e.pos.addScaledVector(e.vel,t),e.mesh.position.copy(e.pos),e.mesh.quaternion.setFromUnitVectors(Qa,zi.copy(e.vel).normalize()),this.city.segmentBlocked(e.old,e.pos,e.radius)){e.life=-1,e.plasma?(this.fx.plasmaImpact(e.pos,(e.feedback||1)*.72),this.audio.impact(1,.68)):this.fx.sparks(e.pos,e.owner==="player"?8386559:16735096,5);continue}if(e.owner==="player")for(let n of this.combatTargets()){let r=this.targetPoint(n,new R);if(ja(e.old,e.pos,r)<(n.radius+e.radius)**2){let a=xg(e.old,e.pos,r,new R);if(n.damage(e.damage,a),e.life=-1,e.plasma){let o=e.feedback||1;this.fx.plasmaImpact(a,o),this.audio.impact(1,o),this.cameraKick=Math.min(.58,this.cameraKick+.024*o),this.plasmaImpactBeat=((this.plasmaImpactBeat||0)+1)%3,n.dead?this.hitstop=Math.max(this.hitstop,.055):this.plasmaImpactBeat===0&&(this.hitstop=Math.max(this.hitstop,.012));for(let c of this.combatTargets())c!==n&&this.targetPoint(c,new R).distanceTo(a)<e.splash&&c.damage(e.damage*.45,a)}if(e.missile){this.fx.explosion(a,16738936,!0);for(let o of this.combatTargets())o!==n&&this.targetPoint(o,new R).distanceTo(a)<15&&o.damage(this.player.elite?104:70,a);this.audio.explosion(!1)}break}}else ja(e.old,e.pos,this.player.group.position)<(2.5+e.radius)**2&&(e.life=-1,this.damage(e.damage,e.pos))}for(let e of this.projectiles.filter(i=>i.life<=0))this.scene.remove(e.mesh);this.projectiles=this.projectiles.filter(e=>e.life>0)}chooseLock(t){let e=null,i=.31;for(let n of this.combatTargets()){let r=this.targetPoint(n,new R).project(this.camera);if(r.z>1)continue;let a=Math.hypot(r.x-this.input.aimX*.36,r.y+this.input.aimY*.32);a<i&&(e=n,i=a)}e===this.lockTarget?this.lockTime=Math.min(1,this.lockTime+t):(this.lockTarget=e,this.lockTime=0),this.lockTime>.66&&this.lockTime-t<=.66&&this.audio.lock()}hasLineOfSight(t,e){return!this.city.segmentBlocked(t,e,.2)}damage(t,e){if(!(this.player.damageCd>0&&e)){if(this.player.damageCd=.18,this.player.shieldDelay=4,this.shielding&&(this.player.boost=Math.max(0,this.player.boost-t*.5),t*=.28),this.player.shield>0){let i=Math.min(this.player.shield,t);this.player.shield-=i,t-=i}t>0&&(this.player.hull=Math.max(0,this.player.hull-t)),this.combo=1,this.damageFlash=1,this.cameraKick=Math.min(1.2,this.cameraKick+.38),this.audio.explosion(!1),e&&this.fx.sparks(this.player.group.position,16729455,18),this.player.hull<=0&&(this.player.alive=!1,this.fx.explosion(this.player.group.position,16725871,!0),this.player.group.visible=!1,setTimeout(()=>this.end(),550))}}nearMiss(){this.score+=Math.round(80*this.combo),this.player.boost=Math.min(100,this.player.boost+9),this.message("NEAR MISS","\u63A8\u8FDB\u80FD\u91CF +9")}hitMarker(t){let e=ut("#reticle");e.classList.add(t?"kill":"hit"),setTimeout(()=>e.classList.remove(t?"kill":"hit"),t?170:110),t&&this.message("OUTLAW DESTROYED","BOUNTY CLAIMED",1900,!0)}message(t,e="",i=1100,n=!1){let r=ut("#message");r.classList.toggle("killmsg",n),r.innerHTML=`${t}${e?`<small>${e}</small>`:""}`,r.style.opacity=1,clearTimeout(this.msgTimer),this.msgTimer=setTimeout(()=>r.style.opacity=0,i)}updateCamera(t){let e=this.player,i=e.forward(Te),n=e.right(zi),r=e.up(rn),a=e.velocity.dot(n);this.flightClock=(this.flightClock||0)+t;let o;if(this.cameraMode==="cockpit")o=sn.copy(e.group.position).addScaledVector(i,1.35-e.boostBlend*.18).addScaledVector(r,1.18).addScaledVector(n,-a*.018-e.slip*.12),wi.setFromAxisAngle(us,e.slipBank*.72),Ka.copy(e.group.quaternion).multiply(wi);else{let u=13.8+e.boostBlend*2.35+e.speedLoad*.65;o=sn.copy(e.group.position).addScaledVector(i,-u).addScaledVector(r,4.7+e.groundRush*.35).addScaledVector(n,-a*.028-e.slip*.5);let d=$a.copy(e.group.position).addScaledVector(i,20+e.speedLoad*6).addScaledVector(r,.7);Th.lookAt(o,d,r),Ka.setFromRotationMatrix(Th),wi.setFromAxisAngle(us,e.slipBank*.55),Ka.multiply(wi)}let c=$a.copy(o).sub(this.camera.position);this.cameraVel.addScaledVector(c,(this.cameraMode==="cockpit"?150:112)*t),this.cameraVel.multiplyScalar(Math.exp(-(this.cameraMode==="cockpit"?16.5:14)*t)),this.camera.position.addScaledVector(this.cameraVel,t);let l=(e.speedLoad*.018+e.groundRush*.075+e.boostBlend*.015)*(this.cameraMode==="cockpit"?.65:1);l>.001&&this.camera.position.addScaledVector(n,Math.sin(this.flightClock*34)*l).addScaledVector(r,Math.sin(this.flightClock*47+1.2)*l*.65),this.cameraKick*=Math.exp(-12*t),this.cameraKick>.005&&this.camera.position.add($a.set(pt(-1,1),pt(-1,1),pt(-1,1)).multiplyScalar(this.cameraKick*.5));let h=this.cameraMode==="cockpit"?12.5:9.8+e.turnLoad*2.2;this.camera.quaternion.slerp(Ka,1-Math.exp(-h*t)),this.cameraRecoil=Zt(this.cameraRecoil,0,24,t),wi.setFromAxisAngle(Ml,this.cameraRecoil),this.camera.quaternion.multiply(wi),this.camera.fov=Zt(this.camera.fov,71+e.boostBlend*10+e.speedLoad*4+e.groundRush*2,7,t),this.camera.updateProjectionMatrix(),this.bloom.strength=Zt(this.bloom.strength,.58+e.boostBlend*.07+e.groundRush*.04,5,t),this.cockpit.update(this.input,e.boostBlend,this.shielding,t)}update(t){if(this.hitstop>0){this.hitstop-=t,this.fx.update(t*.12),this.updateCamera(t*.12);return}if(!this.player.alive){this.fx.update(t);return}if(this.player.update(t,this.input,this.city,this),this.city.update(this.player.group.position,t),this.shotCd-=t,this.input.fire&&this.firePrimary(),this.fireHeld=this.input.fire,this.input.missile&&(this.fireMissile(),this.input.missile=!1),this.spawnTimer-=t,this.spawnTimer<=0){let i=Math.random()<.42?2:1;for(let n=0;n<i;n++)this.spawnEnemy();this.spawnTimer=Bt(1.35-this.wave*.055,.52,1.25)}this.fugitiveTimer-=t,this.fugitiveTimer<=0&&(this.spawnFugitive(),Math.random()<.32&&this.spawnFugitive(),this.fugitiveTimer=pt(1.05,1.75)),this.bossSpawnTimer-=t,this.bossStage===0&&this.bossSpawnTimer<=0&&!this.boss&&!this.bossDefeated&&this.spawnBoss("kaiju"),this.bossStage===1&&this.boss?.dead&&!this.bossDefeated&&(this.nextBossTimer-=t,this.nextBossTimer<=0&&this.spawnUltraBoss());for(let i of this.enemies)i.dead||i.update(t);for(let i of this.fugitives)i.dead||i.update(t);this.boss&&!this.boss.dead&&this.boss.update(t),this.enemies=this.enemies.filter(i=>!i.dead),this.fugitives=this.fugitives.filter(i=>!i.dead),this.updateProjectiles(t),this.fx.update(t),this.chooseLock(t),this.updateCamera(t),this.audio.update(this.player.speed,this.player.boostBlend);let e=1+Math.floor(this.kills/7);e>this.wave&&(this.wave=e,this.message(`WAVE ${String(this.wave).padStart(2,"0")}`,"\u654C\u65B9\u5F3A\u5EA6\u63D0\u5347"),this.player.shield=Math.min(100,this.player.shield+28)),this.score+=t*this.player.speed*.18*this.combo,this.hudCd-=t,(!this.mobile||this.hudCd<=0)&&(this.updateHUD(),this.hudCd=this.mobile?1/30:0)}updateHUD(){let t=this.player,e=[t.elite?"TWIN READY":"READY","RAPID","CHARGED"][this.weaponMode];ut("#weaponName").textContent=this.weaponNames[this.weaponMode],ut("#score").textContent=String(Math.round(this.score)).padStart(6,"0"),ut("#wave").textContent=String(this.wave).padStart(2,"0"),ut("#combo").textContent="\xD7"+this.combo.toFixed(1),ut("#shieldText").textContent=Math.ceil(t.shield),ut("#hullText").textContent=Math.ceil(t.hull),ut("#shieldBar").style.width=t.shield/t.maxShield*100+"%",ut("#hullBar").style.width=t.hull/t.maxHull*100+"%",ut("#boostBar").style.width=t.boost+"%",ut("#speed").textContent=String(Math.round(t.speed)).padStart(3,"0"),ut("#altitude").textContent=String(Math.round(t.group.position.y)).padStart(3,"0"),ut("#heatBar").style.width=t.heat*100+"%",ut("#heatText").textContent=t.heat>.96?"OVERHEAT":t.heat>.65?"HOT":e,ut("#missileText").textContent=t.missileCd>0?t.missileCd.toFixed(1)+"s":this.lockTime>.65?"LOCKED":"READY",ut("#speedlines").style.opacity=Bt(t.boostBlend*.62+t.speedLoad*.28+t.groundRush*.34,0,.88),this.damageFlash*=.86,ut("#damage").style.opacity=this.damageFlash*.8,ut("#upgradeChip").classList.toggle("active",t.elite),ut("#upgradeText").textContent=t.elite?`AURORA PRIME // ACTIVE \xB7 CAP ${this.captures}`:`AURORA PRIME // G TO UPGRADE \xB7 CAP ${this.captures}`;let n=this.boss&&!this.boss.dead,r=ut("#bossHud");if(r.classList.toggle("on",!!n),r.classList.toggle("ultra",!!n&&this.boss.bossKind==="ultra"),r.classList.toggle("barrier",!!n&&!!this.boss.barrierActive),n){let p=ut("#bossBar"),g=ut("#bossHud .boss-head span");p.style.width=Bt(this.boss.hp/this.boss.maxHp*100,0,100)+"%",p.style.background=this.boss.hudGradient||"linear-gradient(90deg,#ff2d82,#66efff)",p.style.boxShadow=`0 0 18px ${this.boss.radarColor||"#ff3f91"}`,g&&(g.textContent=this.boss.hudLabel||"CITY TITAN",g.style.color=this.boss.radarColor||"#ff9ac5"),ut("#bossPhase").textContent=this.boss.barrierActive?`BARRIER \xB7 ${Math.ceil(this.boss.hp)} HP`:`PHASE ${this.boss.phase} \xB7 ${Math.ceil(this.boss.hp)} HP`}let a=this.viewport||Ja(),o=p=>a.left+(p*.5+.5)*a.renderWidth,c=p=>(-p*.5+.5)*a.height,l=t.group.position.clone().addScaledVector(t.forward(Te),40).project(this.camera);ut("#nose").style.left=o(l.x)+"px",ut("#nose").style.top=c(l.y)+"px";let h=ut("#reticle");h.style.left=a.left+(.5+this.input.aimX*.18)*a.renderWidth+"px",h.style.top=(.5+this.input.aimY*.16)*a.height+"px";let u=ut("#lock"),d=ut("#targetInfo");if(this.lockTarget&&!this.lockTarget.dead){let p=this.targetPoint(this.lockTarget,new R),g=p.clone().project(this.camera),_=o(g.x),m=c(g.y);u.style.left=_+"px",u.style.top=m+"px",u.style.opacity=g.z<1?1:0,u.classList.toggle("ready",this.lockTime>.65),d.style.display=g.z<1?"block":"none",d.style.left=_+42+"px",d.style.top=m+34+"px";let f=this.lockTarget.type==="gunship"?"GUNSHIP":this.lockTarget.type==="scout"?"SCOUT":this.lockTarget.type==="fugitive"?"GROUND FUGITIVE":this.lockTarget.targetName||"CITY TITAN";d.textContent=`${f} // ${Math.round(p.distanceTo(t.group.position))}m`}else u.style.opacity=0,d.style.display="none";this.drawRadar()}drawRadar(){let t=this.radar,e=224;t.clearRect(0,0,e,e),t.save(),t.translate(e/2,e/2),t.strokeStyle="#58e9ff33",t.lineWidth=1;for(let o of[36,72,108])t.beginPath(),t.arc(0,0,o,0,Math.PI*2),t.stroke();t.beginPath(),t.moveTo(0,-108),t.lineTo(0,108),t.moveTo(-108,0),t.lineTo(108,0),t.stroke(),t.fillStyle="#b9f9ff",t.beginPath(),t.moveTo(0,-7),t.lineTo(5,7),t.lineTo(-5,7),t.fill();let i=this.player,n=i.right(Te),r=i.forward(zi),a=(o,c,l,h=!1)=>{let u=this.targetPoint(o,new R).sub(i.group.position),d=Bt(u.dot(n)*.45,-102,102),p=Bt(-u.dot(r)*.45,-102,102);t.strokeStyle=t.fillStyle=c,t.beginPath(),t.arc(d,p,l,0,Math.PI*2),h?t.stroke():t.fill()};for(let o of this.enemies)a(o,o.type==="gunship"?"#ff477d":"#ff9b65",o.type==="gunship"?4:3);for(let o of this.fugitives)a(o,"#ffe06a",2.3);this.boss&&!this.boss.dead&&a(this.boss,this.boss.radarColor||"#ff3f91",8,!0),t.restore()}loop(t){this.mobile&&this.input.syncOrientation();let e=Math.min(.05,(t-this.last)/1e3||0),i=this.mobile&&this.input.mobilePortrait;if(this.last=t,this.state==="running"&&!i)for(this.acc+=e;this.acc>=1/60;)this.update(1/60),this.acc-=1/60;else this.state==="menu"&&!i?(this.city.update(this.player.group.position,e),this.updateCamera(e)):i&&(this.acc=0);let n=this.mobile?this.state==="menu"?32:15.8:0;this.state!=="stealth"&&t-this.lastRender>=n&&(this.composer.render(),this.lastRender=t),requestAnimationFrame(r=>this.loop(r))}};window.__NEON_DRIFT__=new Ll;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
