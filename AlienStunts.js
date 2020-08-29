class AlienStunts {
  static async ShowStunts() {

    let htmlContent = await renderTemplate("modules/alien-stunts/template.html");

    let d = new Dialog({
      title: 'Skill and Stunts',
      content: `${htmlContent}`,
      buttons: {
        ok: {
          icon: '<i class="fas fa-check"></i>',
          label: 'Ok',
        },
      }
    });
    d.render(true);
  }

  static SearchSkillLinks(html){
    html.find(".skill_link").click((evt)=>{
      evt.stopPropagation();
      let _element = evt.currentTarget;
      let jrnName = _element.dataset.skilljournal;
      let jrn = game.journal.entities.find(j => j.name===jrnName);
      if(jrn)
        jrn.sheet.render(true);
    });
  }
}

Hooks.on("renderDialog", (app, html, options)=>{
  if(app.title!="Skill and Stunts") return;
  AlienStunts.SearchSkillLinks(html);
});
