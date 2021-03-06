import React from 'react';
import Flag from './Flag.jsx';
import * as styledComponents from '../../../styles/modal/index.js';

class Modal extends React.Component{
  constructor(props){
    super(props);
    const initialPhoto = this.props.modalImage;
    
    this.state = {
      currentPhoto: initialPhoto,
      report: false
    };
    this.nextImage = this.nextImage.bind(this);
    this.report = this.report.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  nextImage(e){
    if (this.props.displayedImages[this.props.displayedImages.indexOf(this.state.currentPhoto) + 1]) {
      this.setState({
        currentPhoto: this.props.displayedImages[this.props.displayedImages.indexOf(this.state.currentPhoto) + 1]
      })
    } 
    e.preventDefault()
  }

  previousImage(e){
    if (this.props.displayedImages[this.props.displayedImages.indexOf(this.state.currentPhoto) - 1]) {
      this.setState({
        currentPhoto: this.props.displayedImages[this.props.displayedImages.indexOf(this.state.currentPhoto) - 1]
      })
    }
    e.preventDefault()
  }

  report(){
    this.setState({
      report: !this.state.report,
    });
  }

  formatDate(date) {
    var monthObj = {
      '01': 'Jan', 
      '02': 'Feb', 
      '03': 'Mar',
      '04': 'Apr', 
      '05': 'May', 
      '06': 'Jun', 
      '07': 'Jul',
      '08': 'Aug', 
      '09': 'Sep', 
      '10': 'Oct',
      '11': 'Nov', 
      '12': 'Dec'
    };
    var year = date.slice(0, 4)
    var month = date.slice(5, 7).toString();
    var day = date.slice(8, 10);
    return monthObj[month] + ' ' + day + ', ' + year;
  }

  render(){
    if (this.state.report === false) {
      return (
        <styledComponents.ModalDiv id='simpleModal' className='modal'>
          <styledComponents.CloseBtn onClick={(e) => this.props.closeModal(e)} className='closeBtn'>&times;</styledComponents.CloseBtn>
          <styledComponents.OuterDiv className='outerDiv'>            
            <styledComponents.LeftArrow className='leftArrow' onClick={(e) => this.previousImage(e)}>&lt;</styledComponents.LeftArrow>            
              <styledComponents.ModalContentHolder className='modal-content-holder'>
                <styledComponents.ModalContent className='modal-content' src={this.state.currentPhoto.file_path} />
                <styledComponents.ModalFooter className='modal-footer'>
                  <styledComponents.CircleHolder className='circle-holder'>
                    <styledComponents.Circle className='circle'>OT</styledComponents.Circle>
                  </styledComponents.CircleHolder>
                  <styledComponents.TextHolder className='text-holder'>
                    <styledComponents.Text className='text'>{this.state.currentPhoto.user}</styledComponents.Text>
                    <styledComponents.DinedOn className='dinedOn'>{this.formatDate(this.state.currentPhoto.date_posted.slice(0,10))}</styledComponents.DinedOn>
                  </styledComponents.TextHolder>
                  <styledComponents.FlagIcon onClick={(e) => this.report(e)} className='flag-icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                    <path id='_24._Tiny_Flag_Icon' fill='#fff' data-name='24. Tiny Flag Icon' d='M485,475H469v12h-2V463h18l-3,6Zm-16-10v8h13l-2-4,2-4H469Z' transform='translate(-464 -463)'/>
                  </styledComponents.FlagIcon>
                </styledComponents.ModalFooter>
              </styledComponents.ModalContentHolder>           
            <styledComponents.RightArrowDiv className='rightArrowDiv'>
              <styledComponents.RightArrow className='rightArrow' onClick={(e) => this.nextImage(e)}>&gt;</styledComponents.RightArrow>
            </styledComponents.RightArrowDiv>          
          </styledComponents.OuterDiv>
        </styledComponents.ModalDiv>
      )
    } else {
      return (
        <div>
          <Flag report={this.report}/>
          <styledComponents.ModalDiv id='simpleModal' className='modal'>
            <styledComponents.CloseBtn onClick={(e) => this.props.closeModal(e)} className='closeBtn'>&times;</styledComponents.CloseBtn>
            <styledComponents.OuterDiv className='outerDiv'>
              <styledComponents.LeftArrow className='leftArrow' onClick={(e) => this.previousImage(e)}>&lt;</styledComponents.LeftArrow>
                <styledComponents.ModalContentHolder className='modal-content-holder'>
                  <styledComponents.ModalContent className='modal-content' src={this.state.currentPhoto.file_path} />
                  <styledComponents.ModalFooter className='modal-footer'>
                    <styledComponents.CircleHolder className='circle-holder'>
                      <styledComponents.Circle className='circle'>OT</styledComponents.Circle>
                    </styledComponents.CircleHolder>
                    <styledComponents.TextHolder className='text-holder'>
                      <styledComponents.Text className='text'>{this.state.currentPhoto.user}</styledComponents.Text>
                      <styledComponents.DinedOn className='dinedOn'>{this.formatDate(this.state.currentPhoto.date_posted.slice(0,10))}</styledComponents.DinedOn>
                    </styledComponents.TextHolder>
                    <styledComponents.FlagIcon onClick={this.report} className='flag-icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                      <path id='_24._Tiny_Flag_Icon' fill='#fff' data-name='24. Tiny Flag Icon' d='M485,475H469v12h-2V463h18l-3,6Zm-16-10v8h13l-2-4,2-4H469Z' transform='translate(-464 -463)'/>
                    </styledComponents.FlagIcon>
                  </styledComponents.ModalFooter>
                </styledComponents.ModalContentHolder>
               <styledComponents.RightArrowDiv className='rightArrowDiv'>
                <styledComponents.RightArrow className='rightArrow' onClick={(e) => this.nextImage(e)}>&gt;</styledComponents.RightArrow>
              </styledComponents.RightArrowDiv>
            </styledComponents.OuterDiv>
          </styledComponents.ModalDiv>
        </div>
      )
    }
  }
}

export default Modal;