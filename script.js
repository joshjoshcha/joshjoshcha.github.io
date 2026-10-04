const photoViewer=document.getElementById('photo-viewer');
let photoTrigger=null;
document.querySelectorAll('.gallery-photo').forEach(link=>link.addEventListener('click',event=>{
 if(!photoViewer.showModal)return;
 event.preventDefault();photoTrigger=link;
 const photo=document.getElementById('large-photo');photo.src=link.href;photo.alt=link.dataset.caption;
 document.getElementById('photo-caption').textContent=link.dataset.caption;
 photoViewer.showModal();
}));
document.getElementById('close-photo').addEventListener('click',()=>photoViewer.close());
photoViewer.addEventListener('click',event=>{if(event.target===photoViewer)photoViewer.close();});
photoViewer.addEventListener('close',()=>{if(photoTrigger)photoTrigger.focus();});

const trialData={"2015": {"Hereford": 29.91, "Xi19": 38.63, "Hereward": 42.96, "Duxford": 50.21, "Barley - KWS Cassia": 10.61, "Cadenza": 18.49}, "2016": {"Hereford": 59.85, "Hereward": 50.97, "Cadenza": 55.24, "Barley - KWS Cassia": 40.81, "Xi19": 56.87, "Duxford": 64.95}, "2017": {"Hereford": 60.94, "Hereward": 53.08, "Cadenza": 55.72, "Barley - KWS Cassia": 52.48, "Xi19": 66.75, "Duxford": 66.26}, "2018": {"Hereford": 58.81, "Hereward": 68.08, "Cadenza": 57.31, "Barley - KWS Cassia": 54.36, "Xi19": 59.1, "Duxford": 61.74}, "2019": {"Hereford": 36.55, "Hereward": 33.38, "Cadenza": 48.46, "Barley - KWS Cassia": 37.56, "Xi19": 38.47, "Duxford": 37.23}, "2020": {"Hereford": 38.69, "Hereward": 40.33, "Cadenza": 22.83, "Barley - KWS Cassia": 22.69, "Xi19": 27.29, "Duxford": 24.42}};
const yearSelect=document.getElementById('trial-year');
Object.keys(trialData).forEach(year=>yearSelect.add(new Option(year,year)));
function drawTrial(){const chart=document.getElementById('trial-chart');chart.replaceChildren();Object.entries(trialData[yearSelect.value]).forEach(([name,value])=>{const row=document.createElement('div');row.className='chart-row';const label=document.createElement('span');label.textContent=name;const track=document.createElement('div');track.className='bar-track';const bar=document.createElement('div');bar.className='bar-fill';bar.style.width=value+'%';track.append(bar);const number=document.createElement('strong');number.textContent=value.toFixed(1)+'%';row.append(label,track,number);chart.append(row)});chart.setAttribute('aria-label','Mean root infection by variety in '+yearSelect.value);}
yearSelect.addEventListener('change',drawTrial);drawTrial();
