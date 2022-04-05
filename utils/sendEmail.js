import sgMail from '@sendgrid/mail'
import dotenv from "dotenv";
dotenv.config();
export const sendMail = async (email, subject, url, user ) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: email, // Change to your recipient
    from: process.env.SENDER, // Change to your verified sender
    subject: subject,
    html: `<!doctype html>
    <html ⚡4email data-css-strict>
    
    <head>
      <meta charset="utf-8">
      <meta name="x-apple-disable-message-reformatting">
      <style amp4email-boilerplate>
        body {
          visibility: hidden
        }
      </style>
    
      <script async src="https://cdn.ampproject.org/v0.js"></script>
    
    
      <style amp-custom>
        .u-row {
          display: flex;
          flex-wrap: nowrap;
          margin-left: 0;
          margin-right: 0;
        }
        
        .u-row .u-col {
          position: relative;
          width: 100%;
          padding-right: 0;
          padding-left: 0;
        }
        
        .u-row .u-col.u-col-100 {
          flex: 0 0 100%;
          max-width: 100%;
        }
        
        @media (max-width: 767px) {
          .u-row:not(.no-stack) {
            flex-wrap: wrap;
          }
          .u-row:not(.no-stack) .u-col {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
        
        body {
          margin: 0;
          padding: 0;
        }
        
        table,
        tr,
        td {
          vertical-align: top;
          border-collapse: collapse;
        }
        
        p {
          margin: 0;
        }
        
        .ie-container table,
        .mso-container table {
          table-layout: fixed;
        }
        
        * {
          line-height: inherit;
        }
        
        table,
        td {
          color: #000000;
        }
        
        a {
          color: #0000ee;
          text-decoration: underline;
        }
      </style>
    
    
    </head>
    
    <body class="clean-body u_body" style="margin: 0;padding: 0;background-color: #f9f9f9;color: #000000">
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%" cellpadding="0" cellspacing="0">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse;vertical-align: top">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->
    
              <div style="padding: 0px;">
                <div style="max-width: 600px;margin: 0 auto;background-color: #ffffff;">
                  <div class="u-row">
    
                    <div class="u-col u-col-100">
                      <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Cabin',sans-serif;" align="left">
    
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                    <td style="padding-right: 0px;padding-left: 0px;" align="center">
    
                                      <amp-img alt="Image" src="https://images.unlayer.com/projects/83388/1654423334783-Screenshot%202022-06-05%20at%2012.01.46%20PM.png" width="332" height="162" layout="intrinsic" style="width: 32%;max-width: 32%;">
    
                                      </amp-img>
                                    </td>
                                  </tr>
                                </table>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                      </div>
                    </div>
    
                  </div>
                </div>
              </div>
    
              <div style="padding: 0px;">
                <div style="max-width: 600px;margin: 0 auto;background-color: #003399;">
                  <div class="u-row">
    
                    <div class="u-col u-col-100">
                      <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:40px 10px 10px;font-family:'Cabin',sans-serif;" align="left">
    
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                    <td style="padding-right: 0px;padding-left: 0px;" align="center">
    
                                      <amp-img alt="Image" src="https://cdn.templates.unlayer.com/assets/1597218650916-xxxxc.png" width="335" height="93" layout="intrinsic" style="width: 26%;max-width: 26%;">
    
                                      </amp-img>
                                    </td>
                                  </tr>
                                </table>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
    
                                <div style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                  <p style="font-size: 14px; line-height: 140%;"><span style="font-family: Lato, sans-serif; font-size: 14px; line-height: 19.6px;"><strong>T H A N K S&nbsp; &nbsp;F O R&nbsp; &nbsp;S I G N I N G&nbsp; &nbsp;U P !</strong></span></p>
                                </div>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 31px;font-family:'Cabin',sans-serif;" align="left">
    
                                <div style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                  <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 28px; line-height: 39.2px; font-family: Lato, sans-serif;"><strong><span style="line-height: 39.2px; font-size: 28px;">Verify Your E-mail Address </span></strong>
                                    </span>
                                  </p>
                                </div>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                      </div>
                    </div>
    
                  </div>
                </div>
              </div>
    
              <div style="padding: 0px;">
                <div style="max-width: 600px;margin: 0 auto;background-color: #ffffff;">
                  <div class="u-row">
    
                    <div class="u-col u-col-100">
                      <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:33px 55px;font-family:'Cabin',sans-serif;" align="left">
    
                                <div style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                  <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 22px; line-height: 35.2px; font-family: Lato, sans-serif;">Hi <span style="color: #2dc26b; font-size: 22px; line-height: 35.2px;">${user}</span> ✋, </span>
                                  </p>
                                  <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 18px; line-height: 28.8px; font-family: terminal, monaco;"><span style="font-size: 14px; line-height: 22.4px;">Y<span style="line-height: 22.4px; font-size: 14px;">ou're almost ready to get started. Please click on the button below to verify your email address and enjoy our incredible services!</span></span>
                                    <span
                                      style="font-size: 18px; line-height: 28.8px;">&nbsp;</span>
                                      </span>
                                  </p>
                                </div>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
    
                                <div align="center">
                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse;  font-family:'Cabin',sans-serif;"><tr><td style="font-family:'Cabin',sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${url}" style="height:46px; v-text-anchor:middle; width:235px;" arcsize="8.5%" stroke="f" fillcolor="#ff6600"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Cabin',sans-serif;"><![endif]-->
                                  <a href="${url}" style="box-sizing: border-box;display: inline-block;font-family:'Cabin',sans-serif;text-decoration: none;text-align: center;color: #FFFFFF; background-color: #ff6600; border-radius: 4px;  width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; ">
                                    <span style="display:block;padding:14px 44px 13px;line-height:120%;"><span style="font-size: 16px; line-height: 19.2px;"><strong><span style="line-height: 19.2px; font-size: 16px;">VERIFY YOUR EMAIL</span></strong>
                                    </span>
                                    </span>
                                  </a>
                                  <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
                                </div>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:33px 55px 60px;font-family:'Cabin',sans-serif;" align="left">
    
                                <div style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                  <p style="line-height: 160%; font-size: 14px;"><span style="font-size: 18px; line-height: 28.8px; font-family: Lato, sans-serif;">Thanks,</span></p>
                                  <p style="line-height: 160%; font-size: 14px;"><span style="font-size: 18px; line-height: 28.8px; font-family: Lato, sans-serif;">Thiernope</span></p>
                                </div>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                      </div>
                    </div>
    
                  </div>
                </div>
              </div>
    
              <div style="padding: 0px;">
                <div style="max-width: 600px;margin: 0 auto;background-color: #e5eaf5;">
                  <div class="u-row">
    
                    <div class="u-col u-col-100">
                      <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:41px 55px 18px;font-family:'Cabin',sans-serif;" align="left">
    
                                <div style="color: #003399; line-height: 160%; text-align: center; word-wrap: break-word;">
                                  <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 20px; line-height: 32px; font-family: Lato, sans-serif;"><strong>Get in touch</strong></span></p>
                                  <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 16px; line-height: 25.6px; color: #000000; font-family: Lato, sans-serif;">+250-787-295-921</span></p>
                                  <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 16px; line-height: 25.6px; color: #000000;">thierryntira12@gmail.com</span></p>
                                </div>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 33px;font-family:'Cabin',sans-serif;" align="left">
                                <div style="text-align:center;line-height:0px">
                                  <a href="https://web.facebook.com/thierry.ntirandekura.98" target="_blank" style="display:inline-block;width:32px;height:32px;margin-right:17px">
                                    <amp-img src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png" width="32" height="32" />
                                  </a>
                                  <a href="https://www.linkedin.com/in/thierry-ntirandekura-96b33417b/" target="_blank" style="display:inline-block;width:32px;height:32px;margin-right:17px">
                                    <amp-img src="https://cdn.tools.unlayer.com/social/icons/circle-black/linkedin.png" width="32" height="32" />
                                  </a>
                                  <a href="https://twitter.com/ThierryNtirand1" target="_blank" style="display:inline-block;width:32px;height:32px;margin-right:0px">
                                    <amp-img src="https://cdn.tools.unlayer.com/social/icons/circle-black/twitter.png" width="32" height="32" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                      </div>
                    </div>
    
                  </div>
                </div>
              </div>
    
              <div style="padding: 0px;">
                <div style="max-width: 600px;margin: 0 auto;background-color: #003399;">
                  <div class="u-row">
    
                    <div class="u-col u-col-100">
                      <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
    
                                <div style="color: #fafafa; line-height: 180%; text-align: center; word-wrap: break-word;">
                                  <p style="font-size: 14px; line-height: 180%;"><span style="font-size: 16px; line-height: 28.8px;">Copyrights &copy; 2022 Thiernope.&nbsp; All Rights Reserved !</span></p>
                                </div>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                      </div>
                    </div>
    
                  </div>
                </div>
              </div>
    
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      <!--[if mso]></div><![endif]-->
      <!--[if IE]></div><![endif]-->
    </body>
    
    </html>`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}


export const sendMailPasswordReset = async (email, subject, url, user ) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: email, // Change to your recipient
    from: process.env.SENDER, // Change to your verified sender
    subject: subject,
    html: `<!doctype html>
    <html ⚡4email data-css-strict>
    
    <head>
      <meta charset="utf-8">
      <meta name="x-apple-disable-message-reformatting">
      <style amp4email-boilerplate>
        body {
          visibility: hidden
        }
      </style>
    
      <script async src="https://cdn.ampproject.org/v0.js"></script>
    
    
      <style amp-custom>
        .u-row {
          display: flex;
          flex-wrap: nowrap;
          margin-left: 0;
          margin-right: 0;
        }
        
        .u-row .u-col {
          position: relative;
          width: 100%;
          padding-right: 0;
          padding-left: 0;
        }
        
        .u-row .u-col.u-col-100 {
          flex: 0 0 100%;
          max-width: 100%;
        }
        
        @media (max-width: 767px) {
          .u-row:not(.no-stack) {
            flex-wrap: wrap;
          }
          .u-row:not(.no-stack) .u-col {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
        
        body {
          margin: 0;
          padding: 0;
        }
        
        table,
        tr,
        td {
          vertical-align: top;
          border-collapse: collapse;
        }
        
        p {
          margin: 0;
        }
        
        .ie-container table,
        .mso-container table {
          table-layout: fixed;
        }
        
        * {
          line-height: inherit;
        }
        
        table,
        td {
          color: #000000;
        }
        
        a {
          color: #0000ee;
          text-decoration: underline;
        }
      </style>
    
    
    </head>
    
    <body class="clean-body u_body" style="margin: 0;padding: 0;background-color: #f9f9f9;color: #000000">
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%" cellpadding="0" cellspacing="0">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse;vertical-align: top">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->
    
              <div style="padding: 0px;">
                <div style="max-width: 600px;margin: 0 auto;background-color: #ffffff;">
                  <div class="u-row">
    
                    <div class="u-col u-col-100">
                      <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Cabin',sans-serif;" align="left">
    
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                    <td style="padding-right: 0px;padding-left: 0px;" align="center">
    
                                      <amp-img alt="Image" src="https://images.unlayer.com/projects/83388/1654423334783-Screenshot%202022-06-05%20at%2012.01.46%20PM.png" width="332" height="162" layout="intrinsic" style="width: 32%;max-width: 32%;">
    
                                      </amp-img>
                                    </td>
                                  </tr>
                                </table>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                      </div>
                    </div>
    
                  </div>
                </div>
              </div>
    
              <div style="padding: 0px;">
                <div style="max-width: 600px;margin: 0 auto;background-color: #003399;">
                  <div class="u-row">
    
                    <div class="u-col u-col-100">
                      <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:40px 10px 10px;font-family:'Cabin',sans-serif;" align="left">
    
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                    <td style="padding-right: 0px;padding-left: 0px;" align="center">
    
                                      <amp-img alt="Image" src="https://cdn.templates.unlayer.com/assets/1597218650916-xxxxc.png" width="335" height="93" layout="intrinsic" style="width: 26%;max-width: 26%;">
    
                                      </amp-img>
                                    </td>
                                  </tr>
                                </table>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
    
                                <div style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                  <p style="font-size: 14px; line-height: 140%;"><span style="font-family: Lato, sans-serif; font-size: 14px; line-height: 19.6px;"><strong>HAPPY_&nbsp; &nbsp;FOR_&nbsp; &nbsp;YOU&nbsp; &nbsp; !</strong></span></p>
                                </div>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 31px;font-family:'Cabin',sans-serif;" align="left">
    
                                <div style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                  <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 28px; line-height: 39.2px; font-family: Lato, sans-serif;"><strong><span style="line-height: 39.2px; font-size: 28px;">RESET YOUR PASSWORD! </span></strong>
                                    </span>
                                  </p>
                                </div>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                      </div>
                    </div>
    
                  </div>
                </div>
              </div>
    
              <div style="padding: 0px;">
                <div style="max-width: 600px;margin: 0 auto;background-color: #ffffff;">
                  <div class="u-row">
    
                    <div class="u-col u-col-100">
                      <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:33px 55px;font-family:'Cabin',sans-serif;" align="left">
    
                                <div style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                  <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 22px; line-height: 35.2px; font-family: Lato, sans-serif;">Hi <span style="color: #2dc26b; font-size: 22px; line-height: 35.2px;">${user}</span> ✋, </span>
                                  </p>
                                  <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 18px; line-height: 28.8px; font-family: terminal, monaco;"><span style="font-size: 14px; line-height: 22.4px;">Y<span style="line-height: 22.4px; font-size: 14px;">ou're  receiving this email because someone has requested a reset password link. Ignore this if you are not the one who requested it.</span></span>
                                    <span
                                      style="font-size: 18px; line-height: 28.8px;">&nbsp;</span>
                                      </span>
                                  </p>
                                </div>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
    
                                <div align="center">
                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse;  font-family:'Cabin',sans-serif;"><tr><td style="font-family:'Cabin',sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${url}" style="height:46px; v-text-anchor:middle; width:235px;" arcsize="8.5%" stroke="f" fillcolor="#ff6600"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Cabin',sans-serif;"><![endif]-->
                                  <a href="${url}" style="box-sizing: border-box;display: inline-block;font-family:'Cabin',sans-serif;text-decoration: none;text-align: center;color: #FFFFFF; background-color: #ff6600; border-radius: 4px;  width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; ">
                                    <span style="display:block;padding:14px 44px 13px;line-height:120%;"><span style="font-size: 16px; line-height: 19.2px;"><strong><span style="line-height: 19.2px; font-size: 16px;">RESET YOUR PASSWORD</span></strong>
                                    </span>
                                    </span>
                                  </a>
                                  <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
                                </div>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:33px 55px 60px;font-family:'Cabin',sans-serif;" align="left">
    
                                <div style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                  <p style="line-height: 160%; font-size: 14px;"><span style="font-size: 18px; line-height: 28.8px; font-family: Lato, sans-serif;">Thanks,</span></p>
                                  <p style="line-height: 160%; font-size: 14px;"><span style="font-size: 18px; line-height: 28.8px; font-family: Lato, sans-serif;">Thiernope</span></p>
                                </div>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                      </div>
                    </div>
    
                  </div>
                </div>
              </div>
    
              <div style="padding: 0px;">
                <div style="max-width: 600px;margin: 0 auto;background-color: #e5eaf5;">
                  <div class="u-row">
    
                    <div class="u-col u-col-100">
                      <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:41px 55px 18px;font-family:'Cabin',sans-serif;" align="left">
    
                                <div style="color: #003399; line-height: 160%; text-align: center; word-wrap: break-word;">
                                  <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 20px; line-height: 32px; font-family: Lato, sans-serif;"><strong>Get in touch</strong></span></p>
                                  <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 16px; line-height: 25.6px; color: #000000; font-family: Lato, sans-serif;">+250-787-295-921</span></p>
                                  <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 16px; line-height: 25.6px; color: #000000;">thierryntira12@gmail.com</span></p>
                                </div>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 33px;font-family:'Cabin',sans-serif;" align="left">
                                <div style="text-align:center;line-height:0px">
                                  <a href="https://web.facebook.com/thierry.ntirandekura.98" target="_blank" style="display:inline-block;width:32px;height:32px;margin-right:17px">
                                    <amp-img src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png" width="32" height="32" />
                                  </a>
                                  <a href="https://www.linkedin.com/in/thierry-ntirandekura-96b33417b/" target="_blank" style="display:inline-block;width:32px;height:32px;margin-right:17px">
                                    <amp-img src="https://cdn.tools.unlayer.com/social/icons/circle-black/linkedin.png" width="32" height="32" />
                                  </a>
                                  <a href="https://twitter.com/ThierryNtirand1" target="_blank" style="display:inline-block;width:32px;height:32px;margin-right:0px">
                                    <amp-img src="https://cdn.tools.unlayer.com/social/icons/circle-black/twitter.png" width="32" height="32" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                      </div>
                    </div>
    
                  </div>
                </div>
              </div>
    
              <div style="padding: 0px;">
                <div style="max-width: 600px;margin: 0 auto;background-color: #003399;">
                  <div class="u-row">
    
                    <div class="u-col u-col-100">
                      <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
    
                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
    
                                <div style="color: #fafafa; line-height: 180%; text-align: center; word-wrap: break-word;">
                                  <p style="font-size: 14px; line-height: 180%;"><span style="font-size: 16px; line-height: 28.8px;">Copyrights &copy; 2022 Thiernope.&nbsp; All Rights Reserved !</span></p>
                                </div>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                      </div>
                    </div>
    
                  </div>
                </div>
              </div>
    
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      <!--[if mso]></div><![endif]-->
      <!--[if IE]></div><![endif]-->
    </body>
    
    </html>`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}








