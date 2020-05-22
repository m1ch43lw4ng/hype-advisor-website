import React from "react"
import { FaInstagram, FaLinkedin, FaEnvelope} from 'react-icons/fa';

import "../css/social_media.scss"

const Social_Media = ({}) => (
  <ul class="Social_Media-icons">
    <li><a href="http://instagram.com/thehypeadvisor" target="_blank"><FaInstagram /></a></li>
    <li><a href="https://www.linkedin.com/company/23693391" target="_blank"><FaLinkedin /></a></li>
    <li><a href="mailto:team@thehypeadvisor.com"><FaEnvelope /></a></li>
  </ul>
)

export default Social_Media
