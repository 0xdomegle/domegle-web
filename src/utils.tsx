import {
  IconDefinition,
  // faGithub,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface IRoute {
  path: string;
  label: string;
}

interface Social {
  icon: IconDefinition;
  link: string;
}

export const navLinks: IRoute[] = [
  {
    path: "about",
    label: "About",
  },
  {
    path: "token",
    label: "Get Token",
  },
  {
    path: "https://docs.0xdomegle.com/",
    label: "Docs",
  },
];

export const footerLinks: IRoute[] = [
  {
    label: "Terms & Condition",
    path: "https://docs.0xdomegle.com/terms-of-service-for-0xdomegle",
  },
  {
    label: "Privacy Policy",
    path: "https://docs.0xdomegle.com/privacy-notice-for-domegle",
  },
  {
    label: "Feedback",
    path: "https://3dzv780u81j.typeform.com/to/dcaoQ8yG",
  },
];

export const socialMedia: Social[] = [
  {
    icon: faXTwitter,
    link: "https://x.com/0xdomegle",
  },
  {
    icon: faInstagram,
    link: "https://instagram.com/0xdomegle",
  },
  // {
  //   icon: faGithub,
  //   link: "https://github.com/0xdomegle",
  // },
];

export const aboutUs = `We're on a mission to totally shake up the online scene, taking
inspiration from Omegle but adding a twist with some blockchain
wizardry. Picture this: a place where you can chat away anonymously,
but now it's supercharged with webRTC's peer-to-peer connections,
ditching the need for central servers and letting you express yourself
away from prying eyes. But hey, it's not just about chatting. We're
dreaming way bigger, aiming to flip the script on social platforms by
creating a digital world where you call the shots, keep your data to
yourself, and let communities thrive without limits. And instead of
NFTs, we're now all about using our own tokens to unlock cool features
like gender matching or super specific hashtag searches, keeping your
connections safe for the future. We're redefining online connections,
aiming for a place where privacy, security, and empowering users
aren't just goals but the real deal. As we dive into mixing
blockchain, webRTC, and our own tokens, we're cooking up something
groundbreaking. So, jump on board as we head towards a more inclusive,
secure, and user-driven digital universe.`;

export const about = `We're on a mission to shake up the online world with a cool new
project that takes a page from Omegle's book but twists it with some
blockchain magic. Imagine a space where you can chat away
anonymously, now enhanced with the seamless, peer-to-peer
connections made possible by webRTC. Forget about relying on central
servers. We're all about ensuring you have a space to express
yourself freely, far from any prying eyes.

This isn't just about chatting, though. We're dreaming big, thinking
about how this could change the game for social platforms
everywhere. Imagine a digital realm where you're the boss, your data
remains yours, and communities flourish without restraint. With the
introduction of NFTs, we're not just talking about secure chats;
we're talking about unlocking special features like gender matching
or precise hashtag searches, all while preserving your connections
for the future through the unique capabilities of NFTs. <br/> <br/>

We're redefining what it means to connect online, aiming for a world
where privacy, security, and user empowerment are not just ideals
but realities. As we dive into the synergy between blockchain,
webRTC, and NFTs, we're crafting something truly groundbreaking. So
come on board as we journey towards a more inclusive, secure, and
user-centric digital cosmos.`;
