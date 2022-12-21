import React, { useEffect } from 'react';
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { StyledContainer } from './styled';
import Message from '../../molecules/Message';

interface toastrList {
  text: string;
  link: string;
  id: string;
}
interface ToastrProps {
  toastr: toastrList[];
}

function Toastr(props: ToastrProps) {
  const toastList = props.toastr;

  useEffect(() => {
    toastList.forEach((itemToastr) => {
      const myItem = localStorage.getItem(`aviso${itemToastr.id}`);
      if (myItem == 'true' || myItem == null) {
        localStorage.setItem(`aviso${itemToastr.id}`, 'true');
        creatToastr(itemToastr);
      }
    });
  }, []);

  function creatToastr(itemToastr) {
    toast(
      <Message
        toastr={{
          text: itemToastr.text,
          link: itemToastr.link,
          id: itemToastr.id,
        }}
      />,
      {
        containerId: 'Toastr',
        toastId: itemToastr.id,
      },
    );
  }

  toast.onChange((payload) => {
    if (payload.status === 'removed') {
      const myItem = localStorage.getItem(`aviso${payload.id}`);
      if (myItem === 'true') {
        localStorage.setItem(`aviso${payload.id}`, 'false');
      }
    }
    if (payload.status === 'updated') {
      toastList.forEach((itemToastr) => {
        const myItem = localStorage.getItem(`aviso${itemToastr.id}`);
        if (myItem == 'false') {
          toast.dismiss(itemToastr.id);
        }
      });
    }
  });

  return (
    <div>
      <StyledContainer
        limit={0}
        position="top-center"
        autoClose={false}
        pauseOnFocusLoss
        draggable={false}
        closeOnClick={false}
        transition={Slide}
      />
    </div>
  );
}

export default Toastr;
