import React from 'react';

class Resume extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='container resume-container'>
        <h1 className='page-header'>Resume</h1>
        <div className='center downloads-container'>
          <h4><i className='fa fa-download'>&nbsp;</i></h4>
          <a href='https://drive.google.com/uc?export=download&id=1fDQRJE9IjqHWx2VnhLSY-lo71b346V--' target='_blank'>PDF</a>
          <a href='https://drive.google.com/uc?export=download&id=1y5ffXRCwaah1qnK_szAoe2Qgtv9sdRvM' target='_blank'>DOCX</a>
          <a href='https://drive.google.com/uc?export=download&id=1Yz1iScOO_zIou7VB_mVQq0f-NBD3RXOx' target='_blank'>TEXT</a>
        </div>
        <div className='resume resume-1'>&nbsp;</div>
        <div className='resume resume-2'>&nbsp;</div>
      </div>
    )
  }
}

export default Resume
