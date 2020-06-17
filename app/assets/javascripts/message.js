$(function(){
  function buildHTML(message){
    if (message.image){
      let html = 
      `
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
      `
      return html;

    }else{
      let html = 
      `<div class="chat_main__message_list__message">
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
      `
      return html;
    }
  }
  $('.chat_main__messageForm__newMessage').on("submit",function(e){
    e.preventDefault();
    let formData = new FormData(this)
    let url = $(this).attr('action')

    $.ajax({
      url:url,
      type: 'POST',
      data: formData,
      dataType:'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      let html = buildHTML(data);
      $('.messages').append(html);
      $('.chat_main__messageForm__newMessage')[0].reset();
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('.chat_main__messageForm__send').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })
})