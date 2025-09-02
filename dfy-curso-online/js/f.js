// Configurações do vídeo
var idVideoVsl = "14vp3tOEW34";
var tempoCTA = 40;
var tempoBell = 45;

// Carregar a API do YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Inicializar o player quando a API estiver pronta
function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
        videoId: idVideoVsl,
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'enablejsapi': 1,
            'rel': 0,
            'playsinline': 1,
            'showinfo': 0,
            'origin': window.location.origin,
            'modestbranding': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    // Player está pronto e deve iniciar automaticamente
    event.target.playVideo();
    addOverlayButtons();
}

function onPlayerStateChange(event) {
    // Atualizar estado de pausa quando o estado do player muda
    addOverlayButtons();
}

// Variáveis para os controles de overlay
var overlayVideo = document.getElementById('overlay-video-glass');
var overlayMsgPaused = document.querySelector('.overlay-msg-paused');
var overlayLeft = document.querySelector('.overlay-left');
var overlayRight = document.querySelector('.overlay-right');
var pause = true;

function addOverlayButtons() {
    if (player && player.getPlayerState) {
        pause = player.getPlayerState() !== YT.PlayerState.PLAYING;
    }
}

function glassPauseVideo() {
    if (player && player.getPlayerState) {
        if (pause) {
            pause = false;
            player.playVideo();
            overlayVideo.style.backgroundColor = 'transparent';
            overlayMsgPaused.style.top = '-100px';
            overlayLeft.classList.remove('overlay-left-onscreen');
            overlayRight.classList.remove('overlay-right-onscreen');
        } else {
            pause = true;
            player.pauseVideo();
            overlayVideo.style.backgroundColor = '#000000dc';
            overlayMsgPaused.style.top = '0';
            overlayLeft.classList.add('overlay-left-onscreen');
            overlayRight.classList.add('overlay-right-onscreen');
        }
    }
}

function playVideo() {
    if (player && player.playVideo) {
        pause = false;
        player.playVideo();
        overlayVideo.style.backgroundColor = 'transparent';
        overlayMsgPaused.style.top = '-100px';
        overlayLeft.classList.remove('overlay-left-onscreen');
        overlayRight.classList.remove('overlay-right-onscreen');
    }
}

function goToReadVersion() {
    var readVersionLink = document.querySelector('.link-read-version');
    if (readVersionLink && readVersionLink.href) {
        window.location.href = readVersionLink.href;
    }
}

// Adicionar event listeners aos controles após o DOM estar carregado
document.addEventListener('DOMContentLoaded', function() {
    // Garantir que os elementos existam antes de adicionar event listeners
    var overlayVideo = document.getElementById('overlay-video-glass');
    var overlayLeft = document.querySelector('.overlay-left');
    var overlayRight = document.querySelector('.overlay-right');
    
    if (overlayVideo) {
        overlayVideo.addEventListener('click', glassPauseVideo);
    }
    
    if (overlayLeft) {
        overlayLeft.addEventListener('click', playVideo);
    }
    
    if (overlayRight) {
        overlayRight.addEventListener('click', goToReadVersion);
    }
    
    // Configurar a exibição do CTA e da campainha no tempo certo
    var ctaRed = document.querySelector('.holder-cta');
    var btnBell = document.querySelector('.bell-button');
    var msgEmpty = document.querySelector('.empty-msg');
    var msgFull = document.querySelector('.full-msg');
    var tituloOriginal = document.title;

    var checkVideoTime = setInterval(function() {
        if (player && player.getCurrentTime) {
            var currentTime = player.getCurrentTime();
            
            // Mostrar CTA no tempo especificado
            if (currentTime > tempoCTA && ctaRed) {
                ctaRed.style.display = 'block';
            } else if (ctaRed) {
                ctaRed.style.display = 'none';
            }
            
            // Ativar campainha no tempo especificado
            if (currentTime > tempoBell && btnBell && msgEmpty && msgFull) {
                btnBell.classList.add('ring');
                msgEmpty.style.display = 'none';
                msgFull.style.display = 'block';
                
                // Notificação no título da página
                var titleInterval = setInterval(function() {
                    document.title = '(1) Nova Mensagem';
                    setTimeout(function() {
                        document.title = tituloOriginal;
                    }, 3000);
                }, 6000);
                
                // Parar de piscar o título quando o usuário clicar na campainha
                btnBell.addEventListener('click', function() {
                    if (btnBell.classList.contains('ring')) {
                        clearInterval(titleInterval);
                        document.title = tituloOriginal;
                    }
                });
            }
        }
    }, 1000);

    // Configurar a campainha de notificação
    var boxBell = document.querySelector('.box-bell');
    var capturaTargetClick = document.body;

    if (msgEmpty && msgFull) {
        msgEmpty.style.display = 'block';
        msgFull.style.display = 'none';
    }

    if (capturaTargetClick && boxBell) {
        capturaTargetClick.addEventListener('click', function(l) {
            boxBell.addEventListener('click', function(l) {
                l.stopPropagation();
            });
            
            if (l.target.classList.contains('bell-button')) {
                boxBell.classList.toggle('box-bell-visible');
            } else if (boxBell.classList.contains('box-bell-visible')) {
                boxBell.classList.remove('box-bell-visible');
            }
        });
    }

    // Header fixo durante o scroll
    var verificaScrolagem = document.body;
    var logoBar = document.querySelector('.main-nav');

    function fixedHeader() {
        if (verificaScrolagem.getBoundingClientRect().top < -5) {
            logoBar.classList.add('fixed-nav-main');
        } else {
            logoBar.classList.remove('fixed-nav-main');
        }
    }

    if (verificaScrolagem && logoBar) {
        document.addEventListener('scroll', fixedHeader);
    }
});