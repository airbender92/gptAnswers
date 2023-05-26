import React from 'react';
import ReactModal from 'react-modal-resizable-draggable';

const DraggableModal: React.FC<{onCloseModal: any, initWidth: any, initHeight: any}> = (props) => {
  const onCloseModal = () => {
    props.onCloseModal && props.onCloseModal();
  }
  return (
    <ReactModal
      initWidth={props.initWidth || 400}
      initHeight={props.initHeight || 300}
      onFocus={() => console.log('onFocus')}
      className={'my-modal-custom-class'}
      onRequestClose={onCloseModal}
      isOpen={props.isOpen}
    >
hh
    </ReactModal>
  )
}
export default DraggableModal;
