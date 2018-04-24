import React from 'react';

export default function ErrorMessage(props) {
  return !props.show ? null : <p>{props.children}</p>;
}