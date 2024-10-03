import React from 'react';
import './Footer.css';
import { Grid, Input, Button } from 'semantic-ui-react';

const Footer = () => (
    <footer className="footer">
        <Grid columns={3} divided>
            <Grid.Row>
                <Grid.Column>
                    <h4>Explore</h4>
                    <p>Home</p>
                    <p>Questions</p>
                    <p>Articles</p>
                    <p>Tutorials</p>
                </Grid.Column>
                <Grid.Column>
                    <h4>Support</h4>
                    <p>FAQs</p>
                    <p>Help</p>
                    <p>Contact Us</p>
                </Grid.Column>
                <Grid.Column>
                    <h4>Stay connected</h4>
                    <p>[Social Media Links]</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <div className="newsletter">
            <Input placeholder='Enter your email...' />
            <Button>Subscribe</Button>
        </div>
        <div className="footer-bottom">
            <p>DEV@Deakin 2022</p>
            <p>Privacy Policy | Terms | Code of Conduct</p>
        </div>
    </footer>
);

export default Footer;
