import React, {Component} from 'react';
import Date from '../DateCalc/DateCalc'
import 'tachyons';

class Footer extends Component {
    render(){
        return(
            <footer className="pv1 ph3-m ph2-l dark-red bg-black bottom-0 w-100 fixed">
                <div className='fr pr3 w-60-m'>
                    <a className='pa2'rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/aakruthi19/" title="Facebook">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAsVBMVEUlUnv///8eQmLl5eXy8vIiT3cAMVfN0dUiS3CjssEWS3YiUHoOR3MANVkcTXiGm7AAQnGsuMYXPl9PaYOYpbRfe5ji6O319/kAP2+/x9DG0Nnr6+tYboYGRHFTc5LY3+Xt8fQ3XoNuiKN9lKu2ws9EZ4mbrL6PorU3YIaVo7PR2OAxU3JddIsAKVFlfpZziJ1AXnoAJlIAN2ixuMAFPWYzVnXd3uB1hZZNbIuKl6UWQ2eer/HSAAAKqklEQVR4nO3dbXuiuB4GcJkHWyEg0iJqBxWl6tjW9pzTmT073/+Drda2QEggCXcC3av3q903bX9DSPJPgPSsf3t6bf8B2vMp/Pj5FH78fAo/fj6FmETjxSwdbTbDc7abUTpbjCMjv1uzMFpMB6t50nPIS+zXvPyP00vmq8F0rxmqTxjtR+ud7xPieU6PHcfzCIn93eNII1OPMJptQzsmNo9GQW0S2+F2ttTyt2gQjgdhEtueEC6LZ8e9cDDG/zlo4WK7O7ZLsWtXVhKSbBfgvwgqHA8SnziKvJc4DvGTDfRK4oRRGsakie5dSfwwxfU8KOFy24tlbz1+vDgZovodjHABunxZHDsOMXckQjgLfdzly+L54Qzw1zUXzubA5kkZ43lzY1PhXp/v1bhvVbhcTXT6XoyTVbM+p4kw2sa2Zt8pdrxtMnY0EKYJMeA7hSRpC8LlwceOD1Vx/INyU1UVpraJBprFtkdGhcvQN+o7JQ7VLqOSMO2ZvYDn2D2lu1FFuJ6YuwPzcSZrI8LxrakutBxyK19YSQvTnu4xviqefEuVFW4MjhGsOP5GqzBame9D6fgruRmOlHA5b+8WzELmUsOGjHC8a2OQKMfeyfQ3EsIFabOPycfzJMp/ceFMcH3XRBxbvDIWFqZxd4Cn9TjhUUNUOG2/Ey3Gn2KFadeAR6JgQxUTdukefE8sRhQS7rsIPHY3QotUIsJxo60IfXE8kXFRQLjcdWUcpOP1BGY39cJo3o2ZDCv2vH6OWi9cdWEuygtZNRdu47YVlakvpuqEHRwIi/HrJjc1wnGvm91oFqdX06HWCG+72o1m8W6bCNdd7mXeQqpX4CqF6aTtv14ok8pJeJWwq3MZOk7lwF8lPHR3qC/GDtWE2gYKxzs/ukelQYOpGjL4wqWeK2jHdnJYD6/PGfwc/DxlOBxeJw2INr+d8oWhhoHCm3wfpr+/3rDy7arBP6l9kBem+NmaFx9mVvSVk5ur4Lv6z+a3U54watJmmHHi8FSxfqsQflEnOgmvyuAJt+ix3vHPm7iVwgZEspUTLtFt1Pv+uohbLWxC5HQ2HOEK3JF6ydvvrxGqE21OqcgW7sHTtVwBUCdUJ07YS/1s4Rw8Ukwu3n90rVCZ6M3FhTPwXZjvBeqFykT2AipTCL6ETpL72QJCVSL7IrKE6EsY50djEaEqkXkRWULwfM0pFOFCQkWix6oxGMI9uKYgA3mhItFndKcM4QHckXqFoVhQqEZkXcSyED2doX6rqFCNGJcnNmXhEDydKTZScaES0R7WC+FFBTXVEBeqEBklRkkIrwsnxZ/PFX4rCVWIcalOLAnRpX1huC8Kb/bTXGZPJaECsdzX0MIxevnJo9YX3oU3F7/6bj5loArRphf5aeEAXfnS9/678OKZRWpMpDq2snCHXrwgP9nCm3sRoDzR2VULF/A1Uvrf9E34+48QUJ5Iz2soIXx5hiu86AsKZYmE2jOlhPBGChBKEulmWhSOwW8RYoRyRIcUe9OiEN6TYoRyROo3FoUaVvIhQikiNegXhPiFbpRQhugkS65wpmFTGySUIcZ7rnCrYUMNJZQg2luuUMeGGkwoTizeiHlhpGNPFCcUJ9oRR4hegkILhYmFGzEvHOE6Gsd7i88TPgRUcEQy4gjXsFbq/P/x8JaUI7z6QeUJRrTXHCFuUhrzX2nNKmB6H3/oooiFqWlOGOFuQxEhnZu/hApGIaKf62pyQmBtqCQsr0QpE/M1Yk44xXU0KsJvv8SEIkSSe9ItJwQWFkrX8FkMKELMD1E54Qo3o1ESAktiL7ennxMC90VVhHtgSZzfK80JgaWTinAGLInzy9CZMIL5lIQ3I5HhUPgqZsNFJhwDq18V4bWUsIboZGs1mXABLH9VhH/LCauJJBsQM+EeuOmkIjwIDodCxFx1kQnTlq+h4JRGjJh7iTYTAmsnJaHolEaImKufMuGmXeHXL/JCPjG3tN8Z4ULeV0FkCpFPKCgIZwqXkE/M7Vp2RjiVHCyqiZ0QUiX+/xSFbKJ2ob1OR29ZsIW/f14XIj0cVhK1C3te/Jb/btjCi/+4tc8pqBP1C7Mg10vFif82YZnIFCLHQ9PCElH7iG9cSBNzv1XPvNS8kCIy56XI2qIFYZHIrC2Q9WEbwgKRWR8ia/xWhHkis8ZHrtO0I8wRmes0yLW2loQ5ImutDble2pbwjcheL4W/ztWG8JXIWfMG7lu0JzwTOfsWeiY1poUvRM7eE3D/sE3hicjZP8Q/H9yO8Ejk7AED9/HbFX75ztnH1/CAcEvCILHYQtzzNG0L/+IItdRPbQhd3jNRnX+uTTR93nNtXX82UTh/eM8mdvz5UuEEPyyesNPPCIvH5T8jrKPMb0HYn3GFy+4+qy+R4Av/Wf3uvm8hJSzchh/knRmpuFXvzHT0vSdJYXG36yO8uyaX4K74Cykhvgo2LnSp13Jbe4dUm/Ch+h1S/IKbaWHwixJpf5fbtNC9rhHC38c3LezXvY8PH/QNC4N7GqT9uxiGhW79dzHQ75EaFt7Vf9sE/cSCWSE9GDKF4G8MmRX2Rb4xBO5rjAoDxodaGULsvMao8IFxpof277WZFJaHCo4Q+s09k0JX9Jt70L1Sg0KquK8SIi+iQSHzEur/fqk5YXDFtGj/Bq05Iasj5QqB3xE2JnQf2RTt34I2J+ScVaL9e96mhK7k97xxJYYhYVAuKmqEsLMfDAn70t/Vh53fQQuj1/crsELmfK1OCDrfwl6NBoW8Hmwh+0JldVyV8y1Q7dR7dplBAvsVR8tXnTMTggbFSySGFVZZKCRcog7s0k38w2+jNec9TVGTN73Eh8qj1yqFuDO7dBJ50zUhIe7cNX3E4KmaUCPEnZ2nj9js7DzgsVaaiPzJjKDQ2nSb2OdNuMWFwHNINRBrehkxIfAsWTgxeEKcJYs8DxhMDC6rhnpxIfIcRCgxeAad6Qw9lxtJdNnHH6kIkQuoMGLAXh5VFFoz3G4NitivPH1UWmhN/W411EAUKCy0Zt26FwNRoLiwU0TRe1BOaO2droyLwbNQLyottMa7bsxugjuRcVBFaC3nXZijulcCMxlFoRWt2q80+o/1c1F14amYarkkri+XGgqttNfmwkbwpa7gbS60xrftLU+5TzJ9jKrQstaTltZRH+rrXYzw2FLbWA0P/ki3UGWhtQxBfaoEsX8vNUg0FB4vo425jKLE4Lli80WL0FquMOOGEDFQvYBNhMfLmEA6VQGie6d0BzYWWtGWIJpqHTFwt3KzGJzw1FQngPG/khj0D/JjIE54LKnCuLmRTwzcH+wnncwJj5VxSBobOcSjT7zS1Sc8Gf2mRhYxeLhv7sMILWsRxg3fXCwR3f6hafs8ByM89jnbpNkNWSAG7t1QeQCkghIex4409JtcyMuM179Pm4wPxeCEx4wHyRGpqrw88x5+DZoND1SgwmMW2x0hnhryMnCPrVNiGU0oaKF1upJhQmzZm9KzSe9+gOZZWoTHRLNtaMdEcA3ZsUlsh9s9qm8pRo/wlGg/etz5/rHNchut43mExP5uPdrjehY6+oQvicbTwWqe9BzyEvuc03+eBtBkvhpMNeJeoln4mmi8mKWjzWZ4zmYzSveLsWbaa8wI28yn8OPnU/jx8yn8+PkUfvz8A0GbQM4Gl97kAAAAAElFTkSuQmCC" className="br3 pr2 dib h3" alt="Facebook" />
                    </a>
                    <a className='pa2' rel="noopener noreferrer" target="_blank" href="https://instagram.com/aakruthi2k19?utm_source=ig_profile_share&igshid=1v7avyozyz6ck" title="Instagram">
                        <img src="data:image/jpeg;base64,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" className="br3 pr2 dib h3" alt="Instagram" />
                    </a>
                </div>
                <div className='tc f4-m f6-ns georgia pa3 ml2 lh-title fl w-20-l w-40-m w-10-l ml3-l br3 pb1-l mt4 mb0 bg-white black pb0-l f3-l f2-ns'>
                    <Date/>
                </div>
                
            </footer>
        );
    }
}

export default Footer;