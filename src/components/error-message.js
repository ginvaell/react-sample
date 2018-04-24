import React from 'react';

/**
 * @return {null}
 */
export default function ErrorMessage(props) {
  return !props.show ? null : (
    <p>{props.children}</p>
  );
}