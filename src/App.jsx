import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useState } from 'react'
import './App.css'
import { Experience } from './components/Experience'

function App() {
  const [selectColorSelected,  setSelectColorSelected ] = useState(false)
  const [colorSetElementsToggle , setColorSetElementsToggle] = useState(false)
  const magicHandToExperience = useRef()
 function onClickSetSelectColor() {
    magicHandToExperience.current.toggleColorState()
    setSelectColorSelected(!selectColorSelected)
    setTimeout(() => { setColorSetElementsToggle(!colorSetElementsToggle)}, colorSetElementsToggle ? 10 : 800)
  }
  return (
    
    <>
    <Suspense fallback={<div style={{width:'100%',height:'100%' , backgroundColor:'blue'}} ></div>} >
      {/* <header style={{backgroundColor:'black',margin:'0px'}} > dfd</header> */}


      <div class="fade-in-up" style={{ zIndex:999 }} >
        <text style={{fontSize:200,position:'absolute' }} > <b>XLSX</b> </text>
        <text style={{fontSize:40,position:'absolute' }} > Redefined, for the streets </text>
      </div>


      {/* {colorSetElementsToggle && <div class='fade-in-up' style={{position:'absolute' ,width:'100%', zIndex:999,flex:1,flexDirection:'column',display:'flex'}} >
        <text style={{fontSize:40, width:1000 }} > XLSX-700 has 4 color options. </text>
        <text style={{fontSize:180 ,marginTop:-60 , width:1000 }} > <b>Select Color</b> </text>

        <div style={{height:50 ,flexDirection:'column',display:'flex', width:'100%'}} >
          <div style={{ height:70,alignSelf:'flex-end',flexDirection:'row',display:'flex',marginTop:-20}} >
            <div style={{width:140,height:140,backgroundColor:'cyan',marginRight:20,borderRadius:20}} ></div>
            <div style={{width:140,height:140,backgroundColor:'cyan',marginRight:20,borderRadius:20}} ></div>
            <div style={{width:140,height:140,backgroundColor:'cyan',marginRight:20,borderRadius:20}} ></div>
            <div style={{width:150,height:70,backgroundColor:'transparent',marginRight:10}} ></div>

          </div>

          </div>
      </div>}


       <div class="fade-in-up" style={{position:'absolute' , width:'100%' , height:'100%' ,zIndex:99,bottom:20,display:'flex',flex:1,flexDirection:'column-reverse'}} >
        
        <div style={{width:'99%', height:100,flexDirection:'row' ,display: selectColorSelected ? '' : 'flex' }} >
        {!selectColorSelected &&
          <div style={{width:'99%', height:100,flexDirection:'row' ,display:'flex' }} >
            <div class="blur" style={{width:300 , height:90 ,borderRadius:20,margin:5}} >dsad</div>
            <div style={{width:300 , height:90 , backgroundColor:'red',borderRadius:20,margin:5}} ></div>
            <div style={{width:300 , height:90 , backgroundColor:'red',borderRadius:20,margin:5}} ></div>
          </div>}
          {!selectColorSelected &&
          <div style={{width:300 , height:90 , backgroundColor:'green',borderRadius:20,margin:5,alignSelf:'flex-end',float:'right'}} ></div>          
          }
          <div style={{width:150 , height:90 , backgroundColor:'green',borderRadius:20,margin:5,alignSelf:'flex-end',float:'right'}} ></div>
          <div style={{width:150 , height:90 , backgroundColor:'green',borderRadius:20,margin:5,alignSelf:'flex-end',float:'right'}} ></div>
        </div>
        <div style={{display:'flex' , flexDirection:'column'}} >
          <button style={{width:100}} onClick={() => {onClickSetSelectColor()}} >Select Color</button>
          <text style={{fontSize:40,zIndex:99}} > <b>New Honda XLS-700</b> </text>
        </div>
        
      </div>
      
      
      
      
       */}
      <div style={{height:'100%' }} >
        <Canvas style={{height:1300}} >
          <Experience ref={magicHandToExperience} />
        </Canvas>
      </div>
    </Suspense>
    </>
  )
}

export default App
