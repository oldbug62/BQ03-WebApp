import assert from 'node:assert/strict';
import {QRCode} from '../vendor/qr.mjs';
import {CODE128} from '../barpatterns.mjs';
import {job, bitmapToRows} from '../protocol.mjs';
const qr=new QRCode(0,1);qr.addData('BQ03-123');qr.make();assert.ok(qr.getModuleCount()>=21);assert.equal(CODE128.length,107);assert.equal(CODE128[106].reduce((a,b)=>a+b,0),13);
for(const [w,h,top] of [[40,20,17],[50,50,19],[30,15,17],[25,25,18],[20,10,18]]){
 const height=w===40&&h===20?137:top+Math.ceil(h*200/25.4);
 const rgba=new Uint8ClampedArray(384*height*4).fill(255); const rows=bitmapToRows(rgba,384,height);
 assert.ok(job(rows,true).length>0);assert.ok(height<=640);
}
console.log('QR-, Code128- und Rastergrößentests erfolgreich.');
