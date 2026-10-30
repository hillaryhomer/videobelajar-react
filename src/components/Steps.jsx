import {CheckCircle2, Circle} from 'lucide-react';
const labels=['Pilih Metode','Bayar','Selesai'];
export default function Steps({active=0}){return <div className="steps">{labels.map((x,i)=><div className={`step ${i<active?'complete':''} ${i===active?'current':''}`} key={x}><span>{i<active?<CheckCircle2 size={18}/>:<Circle size={18}/>}</span><b>{x}</b>{i<2&&<i/>}</div>)}</div>}
