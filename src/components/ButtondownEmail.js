import React from 'react';
import { Form } from 'semantic-ui-react';

const ButtondownEmailForm = () => (
  <Form
    action="https://buttondown.email/api/emails/embed-subscribe/johnny.decimal"
    method="post"
    target="popupwindow"
    onSubmit="window.open('https://buttondown.email/johnny.decimal', 'popupwindow')"
  >
    <Form.Group>
      <Form.Input name="email" placeholder="you@domain.com" />
      <Form.Button content="Submit" />
    </Form.Group>
  </Form>
);

export default ButtondownEmailForm;
