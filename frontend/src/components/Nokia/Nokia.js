import React from 'react'
import './Nokia.css'

export default function Nokia () {
  return (
    <div>
      <div class='container'>
        <div class='screen'><span>NOKIA TIJOLASSO</span>
          <img class='image' src='https://i.pinimg.com/originals/e5/0c/c6/e50cc6fce3321a71d03526429c7b9c00.jpg' width='100px' alt='' />
          <div class='middle-btn' />
          <div class='call-btn'>C</div>
          <div class='chevrons' />
        </div>

        <div class='buttons'>

          <div class='button-row1'>
            <div class='btns btn-1'>1</div>
            <div class='btns btn-2'>2</div>
            <div class='btns btn-3'>3</div>
          </div>

          <div class='button-row2'>
            <div class='btns btn-4'>4</div>
            <div class='btns btn-5'>5</div>
            <div class='btns btn-6'>6</div>
          </div>

          <div class='button-row3'>
            <div class='btns btn-7'>7</div>
            <div class='btns btn-8'>8</div>
            <div class='btns btn-9'>9</div>
          </div>

          <div class='button-row4'>
            <div class='btns btn-10'>*</div>
            <div class='btns btn-0'>0</div>
            <div class='btns btn-12'>#</div>
          </div>

        </div>
      </div>
      <br />
      <p class='message'>Sua mensagem:</p>
    </div>
  )
}
