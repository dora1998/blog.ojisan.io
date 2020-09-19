import * as React from "react"
import styled from "styled-components"
import GitHubIcon from "@material-ui/icons/GitHub"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import { IconButton } from "@material-ui/core"

interface IProps {
  path: string
  title: string
  dateYYYYMMDD: string
  className?: string
}

const Component: React.FC<IProps> = ({
  className,
  path,
  title,
  dateYYYYMMDD,
}) => (
  <div className={className}>
    {/* TODO: ここをcolとして直指定するとこのスタイル名で外に漏れるから外部スタイルシート使うと衝突が怖かったりもする。 */}
    <div className="col">
      {/* sticky container としてこのdivが必要 */}
      <a
        href={`https://twitter.com/intent/tweet?text=${title}%0ahttps://blog.ojisan.io${path}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="twitterへのリンク"
      >
        <IconButton aria-label="twitterアイコン">
          <TwitterIcon />
        </IconButton>
      </a>

      <a
        href="http://www.facebook.com/share.php?u=https://blog.ojisan.io"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="facebookへのリンク"
      >
        <IconButton aria-label="facebookアイコン">
          <FacebookIcon />
        </IconButton>
      </a>
      <a
        href={`https://github.com/sadnessOjisan/blog.ojisan.io/blob/master/src/contents/${dateYYYYMMDD}-${path.replace(
          "/",
          ""
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="githubへのリンク"
      >
        <IconButton aria-label="githubアイコン">
          <GitHubIcon />
        </IconButton>
      </a>
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  > div {
    /* 9vh は headerの高さ分 */
    top: calc(9vh + 32px);
    position: sticky;
    margin-top: 30vh;
  }
  > .col {
    display: flex;
    flex-direction: row;
    padding-left: 12px;
    margin-top: 12px;
  }
  > .col > * {
    margin-right: 16px;
  }
  > .icon {
    width: 20px;
    cursor: pointer;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export default StyledComponent