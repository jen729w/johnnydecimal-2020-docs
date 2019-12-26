// External components
import React from 'react';
import { Header, Grid, Image, Divider, Responsive } from 'semantic-ui-react';

// Internal components
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';
import { JDH1, JDH2 } from '../../components/JDH1H2';

// Helper functions, styles, images, etc.
import styles from '../../styles/styles.module.css';
import img_finder_sampleCompany_id2202_expanded from '../../images/Finder__sample-company__id2202-expanded.png'; // eslint-disable-line max-len
import img_finder_sampleCompany_area1019_incorrect_document from '../../images/Finder__sample-company__area1019-incorrect-document.png'; // eslint-disable-line max-len
import img_finder_sampleCompany_category11_incorrect_document from '../../images/Finder__sample-company__category11-incorrect-document.png'; // eslint-disable-line max-len
import img_finder_sampleCompany_id3201_incorrect_folders from '../../images/Finder__sample-company__id3201-incorrect-folders.png'; // eslint-disable-line max-len

const SavingFiles = () => (
  <Layout>
    <SEO
      title={'Saving files'}
      description={
        'An explanation of the folder structure used when we save files.'
      }
    />

    <JDH1>Saving files</JDH1>

    <p>
      We’ve created areas containing categories and in those categories we have
      Johnny.Decimal numbers. We’re now ready to hold our actual things.
    </p>

    <p>
      <strong>This is where your stuff lives.</strong> This is where you keep
      your spreadsheets and your Word documents and your scanned receipts and
      your notes and references and emails and whatever else you keep in your
      system.
    </p>

    <JDH2>Ooh, pretty</JDH2>

    <Grid stackable doubling columns={2} className={styles.grid_twoColumn}>
      <Grid.Column>
        <Image
          src={img_finder_sampleCompany_id2202_expanded}
          bordered
          rounded
          style={{ width: '293px' }}
          alt="Finder window showing files stored in the folder 22.02 Office lease"
        />
      </Grid.Column>
      <Grid.Column>
        <p>Neatness is the key. If things are neat, you know where they are.</p>

        <p>
          We save our stuff <strong>in our Johnny.Decimal folders.</strong>
        </p>
      </Grid.Column>
    </Grid>

    <JDH2>Never ever do this</JDH2>

    <Grid
      stackable
      doubling
      reversed="computer"
      columns={2}
      className={styles.grid_twoColumn}
    >
      <Grid.Column>
        <p>
          A very important note:{' '}
          <strong>
            you may not store things anywhere other than in a folder with a full
            Johnny.Decimal number.
          </strong>
        </p>

        <p>That means you’re not allowed to do this…</p>
      </Grid.Column>

      <Grid.Column>
        <Image
          src={img_finder_sampleCompany_area1019_incorrect_document}
          bordered
          rounded
          style={{ width: '293px' }}
          alt="Finder window showing file incorrectly stored in the folder 10-19 Finance"
        />
      </Grid.Column>
    </Grid>

    <Responsive minWidth={992}>
      <Grid stackable doubling columns={2} className={styles.grid_twoColumn}>
        <Grid.Column>
          <Image
            src={img_finder_sampleCompany_category11_incorrect_document}
            bordered
            rounded
            style={{ width: '293px' }}
            alt="Finder window showing file incorrectly stored in the folder 11 Tax returns"
          />
        </Grid.Column>
        <Grid.Column>
          <p>
            …or this.{' '}
            <strong>
              The important finance document must relate to something!
            </strong>
          </p>

          <p>
            Find what category that something is, and if it doesn’t exist,
            create it. Then create a new Johnny.Decimal number inside that
            category, and store your document there.
          </p>
        </Grid.Column>
      </Grid>
    </Responsive>

    <Responsive maxWidth={991}>
      <p>…or this.</p>

      <Grid stackable doubling columns={2} className={styles.grid_twoColumn}>
        <Grid.Column>
          <Image
            src={img_finder_sampleCompany_category11_incorrect_document}
            bordered
            rounded
            style={{ width: '293px' }}
            alt="Finder window showing file incorrectly stored in the folder 11 Tax returns"
          />
        </Grid.Column>
        <Grid.Column>
          <p>
            <strong>
              The important finance document must relate to something!
            </strong>
          </p>

          <p>
            Find what category that something is, and if it doesn’t exist,
            create it. Then create a new Johnny.Decimal number inside that
            category, and store your document there.
          </p>
        </Grid.Column>
      </Grid>
    </Responsive>

    <Divider section />

    <JDH1>Nothing is more than two levels deep</JDH1>

    <p>
      <strong>
        You must not create a folder inside a Johnny.Decimal folder.
      </strong>
    </p>

    <p>
      If you do, you’ve created chaos. You might <em>think</em> that this is
      innocent enough – you might even wonder how else you would do it.
    </p>

    <Grid stackable doubling columns={2} className={styles.grid_twoColumn}>
      <Grid.Column>
        <Image
          src={img_finder_sampleCompany_id3201_incorrect_folders}
          bordered
          rounded
          style={{ width: '293px' }}
          alt="Finder window showing folders incorrectly created in the folder 32.01 Launch campaign" // eslint-disable-line max-len
        />
      </Grid.Column>
      <Grid.Column>
        <p>
          <em>
            “Surely you don’t have to create separate Johnny.Decimal numbers and
            folders for each of those things?”
          </em>
          , you’re thinking.
        </p>
        <p>
          Well <strong>of course you do.</strong>
        </p>
      </Grid.Column>
    </Grid>

    <p>
      Those artefacts don’t live in isolation. They’re part of your business and
      they deserve their own home. You know what happens otherwise – a year
      later, someone wants a picture from that photo shoot, but nobody remembers
      where it is because it’s buried in this un-numbered folder.
    </p>

    <JDH2>This costs you real money</JDH2>

    <p>
      You lose stuff. You spend ridiculous amounts of time finding stuff. You
      duplicate stuff. Or you look stupid because you use stuff that is out of
      date.
    </p>

    <p>Stop it.</p>

    <Navigation
      backURL={'/concepts/ids'}
      backTitle={'IDs'}
      forwardURL={'/concepts/keeping-notes'}
      forwardTitle={'Keeping notes'}
    />
  </Layout>
);

export default SavingFiles;
