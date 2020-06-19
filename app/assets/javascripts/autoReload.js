function buildHTML(message){
  if (message.image){
    let html = 
    `<div class="chat_main__message_list" data-message-id=${message.id}>
      <div class="chat_main__message_list__message">
        <div class="chat_main__message_list__message__info">
          <div class="chat_main__message_list__message__info__name">
            ${message.user_name}
          </div>
          <div class="chat_main__message_list__message__info__timestamp">
            ${message.created_at}
          </div>
        </div>
        <div class="chat_main__message_list__message__text">
          <p class="chat_main__message_list__message__text__comment">
            ${message.content}
          </p>
          <img class="chat_main__message_list__message__text__image" src="${message.image}">
        </div>
      </div>
    </div>  
    `
    
    return html;

  }else{
    let html = 
    `<div class="chat_main__message_list" data-message-id=${message.id}>
      <div class="chat_main__message_list__message">
        <div class="chat_main__message_list__message__info">
          <div class="chat_main__message_list__message__info__name">
              ${message.user_name}
          </div>
          <div class="chat_main__message_list__message__info__timestamp">
            ${message.created_at}
          </div>
        </div>
        <div class="chat_main__message_list__message__text">
          <p class="chat_main__message_list__message__text__content">
            ${message.content}
          </p>
        </div>
      </div>
    </div>
    `
    return html;
  }
}
let reloadMessages = function() {
  let last_message_id = $('.chat_main__message_list:last').data("message-id");
  $.ajax({
    url: "api/messages",
    type: 'get',
    dataType: 'json',
    data: {id: last_message_id}
  })
  .done(function(messages) {
    if (messages.length !== 0) {
      let insertHTML = '';
      $.each(messages, function(i, message) {
        insertHTML += buildHTML(message)
      });
      $('.messages').append(insertHTML);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    }
  })
  .fail(function() {
    alert('error');
  });
};
setInterval(reloadMessages, 7000);