import classes from './FooterBar.module.css';
const FooterBar = props =>{
    return (
        <div className={classes.foot}>
            <div className={classes.footerbox}>
                <h1 id={classes.head1}>zeemato</h1>
                <div id={classes.p1}>
                    <h5>ABOUT ZOMATO</h5>
                    <ul>Who We Are</ul>
                    <ul>Blog</ul>
                    <ul>Work With Us</ul>
                    <ul>Investor Relations</ul>
                    <ul>Report Fraud</ul>
                    <ul>Press Kit</ul>
                    <ul>Contact Us</ul>
                </div>
                <div id={classes.p2}>
                    <h5>FOR RESTAURANTS</h5>
                    <ul>Partner With Us</ul>
                    <ul>Apps For You</ul>
                </div>
                <div id={classes.p3}>
                    <h5>FOR ENTERPRISES</h5>
                    <ul>Zeemato For Enterprise</ul>
                </div>
                <div id={classes.p4}>
                    <h5>LEARN MORE</h5>
                    <ul>Privacy</ul>
                    <ul>Security</ul>
                    <ul>Terms</ul>
                    <ul>Sitemap</ul>
                </div>
            </div>
            <div className={classes.end}>
                By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zeemato™ Ltd. All rights reserved.
            </div>
        </div>
    );
}
export default FooterBar;