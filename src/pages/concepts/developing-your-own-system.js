// External components
import React from 'react';
import { Header, Image, Divider } from 'semantic-ui-react';
import { Link } from 'gatsby';

// Internal components
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';
import { JDH1, JDH2 } from '../../components/JDH1H2';

// Helper functions, styles, images, etc.
import styles from '../../styles/styles.module.css';
import mindnode_step1 from '../../images/MindNode__step1.png';
import mindnode_step2 from '../../images/MindNode__step2.png';
import mindnode_step3 from '../../images/MindNode__step3.png';

const DevelopingYourOwn = () => (
  <Layout>
    <SEO
      title={'Developing your own system'}
      description={'How do you develop your own Johnny.Decimal system?'}
    />

    <JDH1>Developing your own system</JDH1>

    <p>To develop your own system, it should now be clear that you need to:</p>

    <ol>
      <li>Break everything up in to, at most, ten areas.</li>
      <li>Break those areas up in to, at most, ten categories.</li>
      <li>Assign numbers to those areas and categories.</li>
      <li>Start creating items and assigning Johnny.Decimal IDs.</li>
      <li>Track your numbers somewhere.</li>
    </ol>

    <p>It’s not much more complicated than that.</p>

    <Divider section />

    <JDH1>Advice: don’t rush the process</JDH1>

    <p>
      I’ve done this a lot now and the best piece of advice I can give is:{' '}
      <strong>take your time.</strong>
    </p>

    <p>
      When you start a new system—let’s say you start a new job—you don’t know
      what you don’t know. It takes time to recognise patterns and understand
      the scope of the task at hand.
    </p>

    <p>
      If you rush in, you’ll create categories that are too broad or narrow.
      You’ll mis-categorise things. You’ll end up having to change it later,
      which is possible, but a pain.
    </p>

    <JDH2>Think on it for a week</JDH2>

    <p>
      I believe you should think on any new Johnny.Decimal system for{' '}
      <strong>at least a week.</strong>
    </p>

    <p>This thing will be with you for a long time; don’t rush it.</p>

    <JDH2>Use sticky notes or a mind map</JDH2>

    <p>
      During this week, write everything that you do on a sticky note. Use many
      sticky notes.
    </p>

    <p>
      When you think you've got a good sample of what you do, group them
      together in to categories first, and then group those categories in to
      areas.
    </p>

    <p>
      Alternatively, use mind mapping software.{' '}
      <a href="https://mindnode.com/">MindNode</a> is amazing.
    </p>

    <Header size="medium" dividing>
      Step 1: just write down everything you do. Don’t try to organise it.
    </Header>

    <Image
      src={mindnode_step1}
      alt="Mind map - step 1, disorganised data"
      style={{
        width: '566px',
        border: '1px solid lightgrey',
        borderRadius: '4px',
      }}
    />

    <Header size="medium" dividing>
      Step 2: group all of those things together to create your categories.
    </Header>
    <Image
      src={mindnode_step2}
      alt="Mind map - step 2, group in to categories"
      style={{
        width: '805px',
        border: '1px solid lightgrey',
        borderRadius: '4px',
      }}
    />

    <Header size="medium" dividing>
      Step 3: group those categories together to create your areas.
    </Header>
    <Image
      src={mindnode_step3}
      alt="Mind map - step 3, group categories in to areas"
      style={{
        width: '942px',
        border: '1px solid lightgrey',
        borderRadius: '4px',
      }}
    />

    <JDH2>Leave room to grow</JDH2>

    <p>
      After almost 3 years managing a complex IT project, I had used about 30
      categories across 7 areas.{' '}
      <strong>Don’t create areas and categories for the sake of it.</strong>
    </p>

    <Divider section />

    <JDH1>Ask for help</JDH1>

    <p>
      I’ll help! <Link to="/contact/">Get in touch</Link>.
    </p>

    <Navigation
      backURL={'/concepts/tracking-your-numbers'}
      backTitle={'Tracking your numbers'}
      forwardURL={'/concepts/managing-email'}
      forwardTitle={'Managing email'}
    />
  </Layout>
);

export default DevelopingYourOwn;
