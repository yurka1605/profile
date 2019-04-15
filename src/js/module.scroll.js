import { userFriends, buttonScroll, scrollTrack, currentUserAgent } from "./module.vars";

export const customScroll = () => {
    if(/firefox/i.test(currentUserAgent) || /msie 10/i.test(currentUserAgent) || /net/i.test(currentUserAgent)) {
        userFriends.style.width = '94.7%';
        const blockScrollHeight = userFriends.scrollHeight;
        const scrollTrackHeight = userFriends.clientHeight + 10;
        const buttonScrollHeight = (userFriends.clientHeight / blockScrollHeight) * scrollTrackHeight;
        buttonScroll.style.height = `${ buttonScrollHeight }px`;
        scrollTrack.style.height = `${ scrollTrackHeight }px`;

        userFriends.addEventListener('scroll', () => {//250-buttonScrollHeight
            let scrollButtonTop = (userFriends.scrollTop / userFriends.scrollHeight) * scrollTrackHeight;
            buttonScroll.style.top = `${ scrollButtonTop }px`;
        });
    }
};