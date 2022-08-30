import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
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
  useEffect(() => {
    props.toastr.map((itemToastr, index) => {
      // add
      localStorage.setItem(itemToastr.id, `aviso${index + 1}`);
    });
  }, []);

  useEffect(() => {
    props.toastr.map((itemToastr) =>
      toast(
        <Message
          toastr={{
            text: itemToastr.text,
            link: itemToastr.link,
            id: itemToastr.id,
          }}
        />,
        {
          toastId: itemToastr.id,
        },
      ),
    );
  }, []);

  return (
    <div>
      <StyledContainer
        limit={0}
        position="top-center"
        autoClose={false}
        pauseOnFocusLoss
        draggable={false}
        closeOnClick={false}
      />
    </div>
  );
}

export default Toastr;
