module.exports = [
  {
    verb: "post",
    path: "/apps",
    middleware: global.verifyJWT,
    method: (req, res) => {
      if(req.body.app_name) {
        res.send({
          app_id: 2343,
          app_token: "someToken"
        });
      }
      else {
        res.status(400).send({error: "Escolha um nome para o aplicativo."});
      }
    }
  },
  {
    verb: "get",
    path: "/apps/:id",
    middleware: global.verifyJWT,
    method: (req, res) => {
      if(req.query.error) {
        return res.status(req.query.error)
          .send([`Opa, você pediu por um erro de status: ${req.query.error}?`]);
      }

      if(isNaN(parseInt(req.params.id))) {
        return res.status(400).send({error: "ID inválido."});
      }

      const apps = global.apps.find(app => app.app_id == req.params.id);

      if(apps) {
        res.send(apps);
      }
      else {
        res.status(404).send({error: "App não encontrado."});
      }
    }
  },

  {
    verb: "put",
    path: "/apps/:id/webpushes/settings",
    middleware: global.verifyJWT,
    method: (req, res) => {
      if(req.query.error) {
        return res.status(req.query.error)
          .send([`Opa, você pediu por um erro de status: ${req.query.error}?`]);
      }

      if(isNaN(parseInt(req.params.id))) {
        return res.status(400).send({error: "ID inválido."});
      }

      const apps = global.apps.find(app => app.app_id == req.params.id);

      if(apps) {
        res.send({
          previous_status: apps.active_channels.webpush.status,
          current_status: apps.active_channels.webpush.status ? 0 : 1
        });
      }
      else {
        res.status(404).send({error: "App não encontrado."});
      }
    }
  },
  {
    verb: "post",
    path: "/apps/:id/webpushes/settings",
    middleware: global.verifyJWT,
    method: (req, res) => {
      if(req.query.error) {
        return res.status(req.query.error)
          .send([`Opa, você pediu por um erro de status: ${req.query.error}?`]);
      }

      if(isNaN(parseInt(req.params.id))) {
        return res.status(400).send({error: "ID inválido."});
      }

      const apps = global.apps.find(app => app.app_id == req.params.id);

      if(apps) {

        if(
          !req.body.settings || 
          !req.body.settings.site || 
          !req.body.settings.allow_notification || 
          !req.body.settings.welcome_notification
        ) {
          return res.status(400).send({error: "Preencha todas as configurações."});
        }

        res.status(200).end();
      }
      else {
        res.status(404).send({error: "App não encontrado."});
      }
    }
  },
  {
    verb: "get",
    path: "/apps/:id/webpushes/settings",
    middleware: global.verifyJWT,
    method: (req, res) => {
      if(req.query.error) {
        return res.status(req.query.error)
          .send([`Opa, você pediu por um erro de status: ${req.query.error}?`]);
      }

      if(isNaN(parseInt(req.params.id))) {
        return res.status(400).send({error: "ID inválido."})
      }

      const apps = global.apps.find(app => app.app_id == req.params.id);

      if(apps) {
        res.send({settings: apps.active_channels.webpush.settings});
      }
      else {
        res.status(404).send({error: "App não encontrado."});
      }
    }
  },

  {
    verb: "put",
    path: "/apps/:id/emails/settings",
    middleware: global.verifyJWT,
    method: (req, res) => {
      if(req.query.error) {
        return res.status(req.query.error)
          .send([`Opa, você pediu por um erro de status: ${req.query.error}?`]);
      }

      if(isNaN(parseInt(req.params.id))) {
        return res.status(400).send({error: "ID inválido."});
      }

      const apps = global.apps.find(app => app.app_id == req.params.id);

      if(apps) {
        res.send({
          previous_status: apps.active_channels.email.status,
          current_status: apps.active_channels.email.status ? 0 : 1
        });
      }
      else {
        res.status(404).send({error: "App não encontrado."});
      }
    }
  },
  {
    verb: "post",
    path: "/apps/:id/emails/settings",
    middleware: global.verifyJWT,
    method: (req, res) => {
      if(req.query.error) {
        return res.status(req.query.error)
          .send([`Opa, você pediu por um erro de status: ${req.query.error}?`]);
      }

      if(isNaN(parseInt(req.params.id))) {
        return res.status(400).send({error: "ID inválido."});
      }

      const apps = global.apps.find(app => app.app_id == req.params.id);

      if(apps) {

        if(
          !req.body.settings || 
          !req.body.settings.sever || 
          !req.body.settings.sender || 
          !req.body.settings.email_templates
        ) {
          return res.status(400).send({error: "Preencha todas as configurações."});
        }

        res.status(200).end();
      }
      else {
        res.status(404).send({error: "App não encontrado."});
      }
    }
  },
  {
    verb: "get",
    path: "/apps/:id/emails/settings",
    middleware: global.verifyJWT,
    method: (req, res) => {
      if(req.query.error) {
        return res.status(req.query.error)
          .send([`Opa, você pediu por um erro de status: ${req.query.error}?`]);
      }

      if(isNaN(parseInt(req.params.id))) {
        return res.status(400).send({error: "ID inválido."})
      }

      const apps = global.apps.find(app => app.app_id == req.params.id);

      if(apps) {
        res.send({settings: apps.active_channels.email.settings});
      }
      else {
        res.status(404).send({error: "App não encontrado."});
      }
    }
  },

  {
    verb: "put",
    path: "/apps/:id/sms/settings",
    middleware: global.verifyJWT,
    method: (req, res) => {
      if(req.query.error) {
        return res.status(req.query.error)
          .send([`Opa, você pediu por um erro de status: ${req.query.error}?`]);
      }

      if(isNaN(parseInt(req.params.id))) {
        return res.status(400).send({error: "ID inválido."});
      }

      const apps = global.apps.find(app => app.app_id == req.params.id);

      if(apps) {
        res.send({
          previous_status: apps.active_channels.sms.status,
          current_status: apps.active_channels.sms.status ? 0 : 1
        });
      }
      else {
        res.status(404).send({error: "App não encontrado."});
      }
    }
  },
  {
    verb: "post",
    path: "/apps/:id/sms/settings",
    middleware: global.verifyJWT,
    method: (req, res) => {
      if(req.query.error) {
        return res.status(req.query.error)
          .send([`Opa, você pediu por um erro de status: ${req.query.error}?`]);
      }

      if(isNaN(parseInt(req.params.id))) {
        return res.status(400).send({error: "ID inválido."});
      }

      const apps = global.apps.find(app => app.app_id == req.params.id);

      if(apps) {

        if(
          !req.body.settings || 
          !req.body.settings.sms_provider || 
          !req.body.settings.sms_provider.name || 
          !req.body.settings.sms_provider.login || 
          !req.body.settings.sms_provider.password
        ) {
          return res.status(400).send({error: "Preencha todas as configurações."});
        }

        res.status(200).end();
      }
      else {
        res.status(404).send({error: "App não encontrado."});
      }
    }
  },
  {
    verb: "get",
    path: "/apps/:id/sms/settings",
    middleware: global.verifyJWT,
    method: (req, res) => {
      if(req.query.error) {
        return res.status(req.query.error)
          .send([`Opa, você pediu por um erro de status: ${req.query.error}?`]);
      }

      if(isNaN(parseInt(req.params.id))) {
        return res.status(400).send({error: "ID inválido."})
      }

      const apps = global.apps.find(app => app.app_id == req.params.id);

      if(apps) {
        res.send({settings: apps.active_channels.sms.settings});
      }
      else {
        res.status(404).send({error: "App não encontrado."});
      }
    }
  },

  {
    verb: "post",
    path: "/apps/:id/:channel/notification",
    middleware: global.verifyJWT,
    method: (req, res) => {
      if(req.query.error) {
        return res.status(req.query.error)
          .send([`Opa, você pediu por um erro de status: ${req.query.error}?`]);
      }

      if(isNaN(parseInt(req.params.id))) {
        return res.status(400).send({error: "ID inválido."});
      }

      if(!['webpushes', 'emails', 'sms'].includes(req.params.channel)) {
        return res.status(404).send({error: "Canal não encontrado."});
      }

      const apps = global.apps.find(app => app.app_id == req.params.id);

      if(apps) {

        if(req.params.channel == 'webpushes' && !validWebpushesParams(req.body)) {
          return res.status(400).send({error: "Preencha todas as configurações de WebPushes."});
        }
        else if(req.params.channel == 'emails' && !validEmailsParams(req.body)) {
          return res.status(400).send({error: "Preencha todas as configurações de Emails."});
        }
        else if(req.params.channel == 'sms' && !validSmsParams(req.body)) {
          return res.status(400).send({error: "Preencha todas as configurações de SMS."});
        }

        res.status(200).send({notification_id: 2343});
      }
      else {
        res.status(404).send({error: "App não encontrado."});
      }
    }
  },

  {
    verb: "get",
    path: "/apps/:id/:channel/notifications",
    middleware: global.verifyJWT,
    method: (req, res) => {
      if(req.query.error) {
        return res.status(req.query.error)
          .send([`Opa, você pediu por um erro de status: ${req.query.error}?`]);
      }

      if(isNaN(parseInt(req.params.id))) {
        return res.status(400).send({error: "ID inválido."});
      }

      if(!['webpushes', 'emails', 'sms'].includes(req.params.channel)) {
        return res.status(404).send({error: "Canal não encontrado."});
      }
      
      const { initdate, enddate } = req.query;

      if(!initdate || !enddate) {
        return res.status(400).send({error: "Período inválido."});
      }

      const apps = global.apps.find(app => app.app_id == req.params.id);

      if(apps) {
        res.send({
          notifications: global.notifications
            .filter(not => not.app_id == apps.app_id)
            .map(not => ({
              notification_id: not.notification_id,
              send_date: not.send_date,
              app_id: not.app_id
            }))
        });
      }
      else {
        res.status(404).send({error: "App não encontrado."});
      }
    }
  },

  {
    verb: "get",
    path: "/apps/:id/:channel/notifications/:notification_id",
    middleware: global.verifyJWT,
    method: (req, res) => {
      if(req.query.error) {
        return res.status(req.query.error)
          .send([`Opa, você pediu por um erro de status: ${req.query.error}?`]);
      }

      if(isNaN(parseInt(req.params.id))) {
        return res.status(400).send({error: "ID inválido."});
      }

      if(isNaN(parseInt(req.params.notification_id))) {
        return res.status(400).send({error: "ID de notificação inválido."});
      }

      if(!['webpushes', 'emails', 'sms'].includes(req.params.channel)) {
        return res.status(404).send({error: "Canal não encontrado."});
      }

      const apps = global.apps.find(app => app.app_id == req.params.id);

      const notification = global.notifications.find(notification => 
        notification.app_id == req.params.id && 
        notification.notification_id == req.params.notification_id
      );

      if(!notification) {
        res.status(404).send({error: "Notificação não encontrada."});
      }

      if(apps) {
        res.send(notification);
      }
      else {
        res.status(404).send({error: "App não encontrado."});
      }
    }
  }
]

function validWebpushesParams(body) {
  const {audience_segments, message_title, message_text, icon_url, redirect_url, app_id} = body;
  if(!audience_segments || !message_title || !message_text || !icon_url || !redirect_url || !app_id) {
    return false;
  }
  return true;
}

function validEmailsParams(body) {
  const {receiver_email, email_template_name, app_id} = body;
  if(!receiver_email || !email_template_name || !app_id) {
    return false;
  }
  return true;
}

function validSmsParams(body) {
  const {phone_number, message_text, app_id} = body;
  if(!phone_number || !message_text || !app_id) {
    return false;
  }
  return true;
}