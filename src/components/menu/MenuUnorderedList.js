import MenuListItem from "./MenuListItem.js";
import MenuUnorderedSublist from "./MenuUnorderedSublist.js";

const MenuUnorderedList = (props) => {
  return (
    <div>
      <ul className="menu__unordered-list">
        {props.chapters_info.map((chaptersInfo, index) => (
          <MenuListItem
            key={`MenuListItem${index}`}
            chapterId={chaptersInfo.chapterId}
            chapterTitle={chaptersInfo.chapterTitle}
            chapterHref={chaptersInfo.chapterHref}
            onChapterViewId={props.onChapterViewId}
          >
            <MenuUnorderedSublist
              subchaptersInfo={chaptersInfo.subchaptersInfo}
            />
          </MenuListItem>
        ))}
      </ul>
    </div>
  );
};

export default MenuUnorderedList;
