import React from "react";
import { IconUser, IconStar, IconSetting } from "@douyinfe/semi-icons";
import { Avatar, Nav } from "@douyinfe/semi-ui";

const LeftNav = () => {
    return (
        <div>
            <div className="flex items-center  justify-center	">
                {/* 登录框 */}
                {/* <Avatar size={64} icon={<UserOutlined />} /> */}
                <Avatar color="red" style={{ margin: 4 }}>
                    BM
                </Avatar>
                Firengxuan
                <div
                    style={{
                        width: 0,
                        height: 0,
                        border: "5px solid transparent",
                        borderLeft: "10px solid #0ff",
                        borderRadius: "4px"
                    }}
                ></div>
            </div>
            <Nav
                bodyStyle={{ height: 320 }}
                // className={}
                style={{ backgroundColor: "#EDEDED" }}
                items={[
                    {
                        itemKey: "user",
                        text: "用户管理",
                        icon: <IconUser />,
                    },
                    {
                        itemKey: "union",
                        text: "我的音乐",
                        icon: <IconStar />,
                    },
                    {
                        text: "创建的歌单",
                        icon: <IconSetting />,
                        itemKey: "job",
                        items: ["任务管理", "用户任务查询"],
                    },
                ]}
                onSelect={(data) => console.log("trigger onSelect: ", data)}
                onClick={(data) => console.log("trigger onClick: ", data)}
            />
            ;
        </div>
    );
};
export default LeftNav;
