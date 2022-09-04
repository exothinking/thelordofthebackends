const jwt = require("jsonwebtoken");

global.isValidError = function (error) {
  const intError = parseInt(error);
  if(!isNaN(intError) && intError >= 400 && intError <= 599) {
    return true
  }
  return false;
}

global.verifyJWT = function (req, res, next) {
  const token = req.headers['authorization'];
  if(token) {
    jwt.verify(token, process.env.SECRET_JWT, (err, decoded) => {
      if(err) { 
        res.status(403).end();
      }
      else {
        req.userId = decoded.userId;
        next();
      }
    });
  }
  else {
    res.status(403).end();
  }
}

global.users = [
  {
    id: 1,
    name: "José Oliveira",
    email: "exothinking@gmail.com",
    company_name: "Vibbra Freelancer",
	  phone_number: "2746237628",
	  company_address: "St Street.",
  },
  {
    id: 2,
    name: "Fernanda",
    email: "fernanda@vibbra.com",
    company_name: "Vibbra Admin",
	  phone_number: "635464477",
	  company_address: "St Ave.",
  },
  {
    id: 3,
    name: "Maira",
    email: "maira@vibbra.com",
    company_name: "Vibbra Admin",
	  phone_number: "24532466",
	  company_address: "St Road.",
  },
  {
    id: 4,
    name: "Juliano",
    email: "juliano@vibbra.com",
    company_name: "Vibbra Admin",
	  phone_number: "4756756765",
	  company_address: "St Fold.",
  }
];

global.apps = [
  {
    app_id: 1,
    app_name: "First App",
    app_token: "sdfuwe@#rfvwR#$T",
    active_channels: {
      webpush: {
        status: 0,
        settings: {
          site: {
            name: "some name",
            address: "some adress",
            url_icon: "https://someurl/someicon.png"
          },
          allow_notification: {
            message_text: "Some message",
            allow_button_text: "Allow Button some text",
            deny_button_text: "Deny Button some text"
          },
          welcome_notification: {
            message_title: "Welcome message notification title",
            message_text: "Welcome message notification text",
            enable_url_redirect: 1,
            url_redirect: "https://someurltoredirect.com"
          }
        }
      },
      email: {
        status: 1,
        settings: {
          sever: {
            smtp_name: "Some SMTP name",
            smpt_port: "Some SMTP port",
            user_login: "Some SMTP user login",
            user_password: "Some SMTP user password"
          },
          sender: {
            name: "Some Sender Name",
            email: "Some Sender E-mail"
          },
          email_templates: [
            {
              name: "Template 1 Name",
              uri: "Template 1 URI"
            },
            {
              name: "Template 2 Name",
              uri: "Template 2 URI"
            },
            {
              name: "Template 3 Name",
              uri: "Template 3 URI"
            }
          ]
        }
      },
      sms: {
        status: 1,
        settings: {
          sms_provider: {
            name: "Some SMS Provider",
            login: "Some SMS login",
            password: "Some SMS password"
          }
        }
      },
    }
  },
  {
    app_id: 2,
    app_name: "Second App",
    app_token: "dfrfw23231wf45",
    active_channels: {
      webpush: {
        status: 1,
        settings: {
          site: {
            name: "some name",
            address: "some adress",
            url_icon: "https://someurl/someicon.png"
          },
          allow_notification: {
            message_text: "Some message",
            allow_button_text: "Allow Button some text",
            deny_button_text: "Deny Button some text"
          },
          welcome_notification: {
            message_title: "Welcome message notification title",
            message_text: "Welcome message notification text",
            enable_url_redirect: 1,
            url_redirect: "https://someurltoredirect.com"
          }
        }
      },
      email: {
        status: 1,
        settings: {
          sever: {
            smtp_name: "Some SMTP name",
            smpt_port: "Some SMTP port",
            user_login: "Some SMTP user login",
            user_password: "Some SMTP user password"
          },
          sender: {
            name: "Some Sender Name",
            email: "Some Sender E-mail"
          },
          email_templates: [
            {
              name: "Template 1 Name",
              uri: "Template 1 URI"
            },
            {
              name: "Template 2 Name",
              uri: "Template 2 URI"
            },
            {
              name: "Template 3 Name",
              uri: "Template 3 URI"
            }
          ]
        }
      },
      sms: {
        status: 0,
        settings: {
          sms_provider: {
            name: "Some SMS Provider",
            login: "Some SMS login",
            password: "Some SMS password"
          }
        }
      },
    }
  },
  {
    app_id: 3,
    app_name: "Third App",
    app_token: "234vwfrRGd325",
    active_channels: {
      webpush: {
        status: 1,
        settings: {
          site: {
            name: "some name",
            address: "some adress",
            url_icon: "https://someurl/someicon.png"
          },
          allow_notification: {
            message_text: "Some message",
            allow_button_text: "Allow Button some text",
            deny_button_text: "Deny Button some text"
          },
          welcome_notification: {
            message_title: "Welcome message notification title",
            message_text: "Welcome message notification text",
            enable_url_redirect: 1,
            url_redirect: "https://someurltoredirect.com"
          }
        }
      },
      email: {
        status: 0,
        settings: {
          sever: {
            smtp_name: "Some SMTP name",
            smpt_port: "Some SMTP port",
            user_login: "Some SMTP user login",
            user_password: "Some SMTP user password"
          },
          sender: {
            name: "Some Sender Name",
            email: "Some Sender E-mail"
          },
          email_templates: [
            {
              name: "Template 1 Name",
              uri: "Template 1 URI"
            },
            {
              name: "Template 2 Name",
              uri: "Template 2 URI"
            },
            {
              name: "Template 3 Name",
              uri: "Template 3 URI"
            }
          ]
        }
      },
      sms: {
        status: 1,
        settings: {
          sms_provider: {
            name: "Some SMS Provider",
            login: "Some SMS login",
            password: "Some SMS password"
          }
        }
      },
    }
  }
]

global.notifications = [
  {
    notification_id: 3653,
    audience_segments: [
      "audience_segment1",
      "audience_segment2",
      "audience_segment3"
    ],
    message_title: "Some message title",
    message_text: "Some message Text",
    icon_url: "Some icon URL",
    redirect_url: "Some redirect URL",
    send_date: Date.now(),
    received: 1,
    opened: 0,
    app_id: 2
  },
  {
    notification_id: 3533,
    audience_segments: [
      "audience_segment1",
      "audience_segment2",
      "audience_segment3"
    ],
    message_title: "Some message title",
    message_text: "Some message Text",
    icon_url: "Some icon URL",
    redirect_url: "Some redirect URL",
    send_date: Date.now(),
    received: 1,
    opened: 0,
    app_id: 1
  },
  {
    notification_id: 3432,
    phone_number: [
      "345546434",
      "567654654",
      "434655466"
    ],
    message_text: "Some message Text",
    send_date: Date.now(),
    received: 1,
    app_id: 3
  },
  {
    notification_id: 331,
    phone_number: [
      "345546434",
      "567654654",
      "434655466"
    ],
    message_text: "Some message Text",
    send_date: Date.now(),
    received: 1,
    app_id: 3
  },
  {
    notification_id: 131,
    receiver_email: [
      "email1@domain.com",
      "email2@domain.com",
      "email3@domain.com"
    ],
    email_template_name: "Some e-mail template name",
    message_text: "Some message Text",
    send_date: Date.now(),
    received: 1,
    opened: 1,
    clicked: 1,
    app_id: 1
  },
  {
    notification_id: 13421,
    receiver_email: [
      "email1@domain.com",
      "email2@domain.com",
      "email3@domain.com"
    ],
    email_template_name: "Some e-mail template name",
    message_text: "Some message Text",
    send_date: Date.now(),
    received: 1,
    opened: 1,
    clicked: 1,
    app_id: 2
  }
]