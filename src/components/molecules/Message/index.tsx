import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useRouter } from 'next/router';
import Button from '../../atoms/Button';
import { Typography } from '../../../styles/typography';
import { ContentStyled } from './styled';

interface toastrList {
  text: string;
  link: string;
  id: string;
}

interface ToastrProps {
  toastr: toastrList;
}

function Message(props: ToastrProps) {
  const toastList = new Set();
  const maxToast = 1;
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const removeAlertStorage = (event) => {
    event.preventDefault();
    const myItem = localStorage.getItem(props.toastr.id);
    if (myItem === `aviso${props.toastr.id}`) {
      console.log(`isVisible t = ${isVisible}`);
      console.log(`botão = ${props.toastr.id}`);
      localStorage.removeItem(props.toastr.id);
      setIsVisible(false);
    } else {
      console.log(`isVisible f= ${isVisible}`);
      setIsVisible(true);
    }
    router.push(props.toastr.link);
    return true;
  };

  function message() {
    if (toastList.size < maxToast) {
      const id = toast(props.toastr.text, {
        onClose: () => toastList.delete(id),
        toastId: props.toastr.id,
      });
      toastList.add(id);
      return props.toastr.text;
    }
    return '';
  }
  return (
    // isVisible && (
    <ContentStyled>
      <Typography
        tag="h1"
        color="gray"
        size="xsmall"
        lineHeight="line140"
        fontWeight="weight1"
        letterSpacing="space2"
      >
        {message()}
      </Typography>
      <Button
        onClick={removeAlertStorage}
        linkBtn={props.toastr.link}
        text="SAIBA MAIS"
      />
    </ContentStyled>
    // )
  );
}
export default Message;
