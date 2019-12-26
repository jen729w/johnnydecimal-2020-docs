// External components
import React from 'react';
import { Header } from 'semantic-ui-react';

// Internal components
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import { JDH1, JDH2 } from '../components/JDH1H2';

// Helper functions, styles, images, etc.
import styles from '../styles/styles.module.css';

const Licence = () => (
  <Layout>
    <SEO
      title={'Licence'}
      description={'What licence terms apply to Johnny.Decimal?'}
    />
    <JDH1>Licence</JDH1>

    <JDH2>MIT Licence</JDH2>

    <p>
      Copyright (c) 2020 John Elliott Noble &lt;hello@johnnydecimal.com&gt;.
    </p>

    <p>
      Permission is hereby granted, free of charge, to any person obtaining a
      copy of this software and associated documentation files<sup>1</sup> (the
      “Software”), to deal in the Software without restriction, including
      without limitation the rights to use, copy, modify, merge, publish,
      distribute, sublicense, and/or sell copies of the Software, and to permit
      persons to whom the Software is furnished to do so, subject to the
      following conditions:
    </p>

    <p>
      The above copyright notice and this permission notice shall be included in
      all copies or substantial portions of the Software.
    </p>

    <p>
      THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
      THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
      FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
      DEALINGS IN THE SOFTWARE.
    </p>

    <div className={styles.footnote}>
      <p>
        <sup>1.</sup>&nbsp;I am in the process of writing software to support
        this system. The pages you are reading may be considered the “associated
        documentation files” to accompany that software, and are therefore
        covered by this licence.
      </p>
    </div>

    <Navigation />
  </Layout>
);

export default Licence;
