import {
    Row,
    Col,
    Card,
    Button,
    List,
    Descriptions,
    Avatar,
    Radio,
    Switch
} from "antd";

import {
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined
} from "@ant-design/icons";

import BgProfile from "../assets/images/bg-profile.jpg";
import profilavatar from "../assets/images/face-1.jpg";
import convesionImg from "../assets/images/face-3.jpg";
import convesionImg2 from "../assets/images/face-4.jpg";
import convesionImg3 from "../assets/images/face-5.jpeg";
import convesionImg4 from "../assets/images/face-6.jpeg";
import convesionImg5 from "../assets/images/face-2.jpg";
import project1 from "../assets/images/home-decor-1.jpeg";
import project2 from "../assets/images/home-decor-2.jpeg";
import project3 from "../assets/images/home-decor-3.jpeg";

function Profile() {

    const pencil = [
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            key={0}
        >
            <path
                d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
                className="fill-gray-7"
            ></path>
            <path
                d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
                className="fill-gray-7"
            ></path>
        </svg>,
    ];

    const data = [
        {
            title: "Sophie B.",
            avatar: convesionImg,
            description: "Hi! I need more information…",
        },
        {
            title: "Anne Marie",
            avatar: convesionImg2,
            description: "Awesome work, can you…",
        },
        {
            title: "Ivan",
            avatar: convesionImg3,
            description: "About files I can…",
        },
        {
            title: "Peterson",
            avatar: convesionImg4,
            description: "Have a great afternoon…",
        },
        {
            title: "Nick Daniel",
            avatar: convesionImg5,
            description: "Hi! I need more information…",
        },
    ];

    const project = [
        {
            img: project1,
            titlesub: "Project #1",
            title: "Modern",
            disciption:
                "As Uber works through a huge amount of internal management turmoil.",
        },
        {
            img: project2,
            titlesub: "Project #2",
            title: "Scandinavian",
            disciption:
                "Music is something that every person has his or her own specific opinion about.",
        },
        {
            img: project3,
            titlesub: "Project #3",
            title: "Minimalist",
            disciption:
                "Different people have different taste, and various types of music, Zimbali Resort",
        },
    ];

    return (
        <>
            <div
                className="profile-nav-bg"
                style={{ backgroundImage: "url(" + BgProfile + ")" }}
            ></div>

            <Card
                className="card-profile-head"
                title={
                    <Row justify="space-between" align="middle" gutter={[24, 0]}>
                        <Col span={24} md={12} className="col-info">
                            <Avatar.Group>
                                <Avatar size={74} shape="square" src={profilavatar} />

                                <div className="avatar-info">
                                    <h4 className="font-semibold m-0">Sarah Jacob</h4>
                                    <p>CEO / Co-Founder</p>
                                </div>
                            </Avatar.Group>
                        </Col>
                        <Col
                            span={24}
                            md={12}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Radio.Group defaultValue="a">
                                <Radio.Button value="a">OVERVIEW</Radio.Button>
                                <Radio.Button value="b">TEAMS</Radio.Button>
                                <Radio.Button value="c">PROJECTS</Radio.Button>
                            </Radio.Group>
                        </Col>
                    </Row>
                }
            ></Card>

            <Row gutter={[24, 0]}>
                <Col span={24} md={8} className="mb-24 ">
                    <Card
                        className="header-solid h-full"
                        title={<h6 className="font-semibold m-0">Platform Settings</h6>}
                    >
                        <ul className="list settings-list">
                            <li>
                                <h6 className="list-header text-sm text-muted">ACCOUNT</h6>
                            </li>
                            <li>
                                <Switch defaultChecked />

                                <span>Email me when someone follows me</span>
                            </li>
                            <li>
                                <Switch />
                                <span>Email me when someone answers me</span>
                            </li>
                            <li>
                                <Switch defaultChecked />
                                <span>Email me when someone mentions me</span>
                            </li>
                            <li>
                                <h6 className="list-header text-sm text-muted m-0">
                                    APPLICATION
                                </h6>
                            </li>
                            <li>
                                <Switch defaultChecked />
                                <span>New launches and projects</span>
                            </li>
                            <li>
                                <Switch defaultChecked />
                                <span>Monthly product updates</span>
                            </li>
                            <li>
                                <Switch defaultChecked />
                                <span>Subscribe to newsletter</span>
                            </li>
                        </ul>
                    </Card>
                </Col>
                <Col span={24} md={8} className="mb-24">
                    <Card
                        title={<h6 className="font-semibold m-0">Profile Information</h6>}
                        className="header-solid h-full card-profile-information"
                        extra={<Button type="link">{pencil}</Button>}
                    >
                        <p className="text-dark">
                            {" "}
                            Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer
                            is no. If two equally difficult paths, choose the one more painful
                            in the short term (pain avoidance is creating an illusion of
                            equality).{" "}
                        </p>
                        <hr className="my-25" />
                        <Descriptions title="Oliver Liam">
                            <Descriptions.Item label="Full Name" span={3}>
                                Sarah Emily Jacob
                            </Descriptions.Item>
                            <Descriptions.Item label="Mobile" span={3}>
                                (44) 123 1234 123
                            </Descriptions.Item>
                            <Descriptions.Item label="Email" span={3}>
                                sarahjacob@mail.com
                            </Descriptions.Item>
                            <Descriptions.Item label="Location" span={3}>
                                USA
                            </Descriptions.Item>
                            <Descriptions.Item label="Social" span={3}>
                                <a href="/" className="mx-5 px-5">
                                    {<TwitterOutlined />}
                                </a>
                                <a href="/" className="mx-5 px-5">
                                    {<FacebookOutlined style={{ color: "#344e86" }} />}
                                </a>
                                <a href="/" className="mx-5 px-5">
                                    {<InstagramOutlined style={{ color: "#e1306c" }} />}
                                </a>
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>
                </Col>
                <Col span={24} md={8} className="mb-24">
                    <Card
                        title={<h6 className="font-semibold m-0">Conversations</h6>}
                        className="header-solid h-full"
                    >
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            split={false}
                            className="conversations-list"
                            renderItem={(item) => (
                                <List.Item actions={[<Button type="link">REPLY</Button>]}>
                                    <List.Item.Meta
                                        avatar={
                                            <Avatar shape="square" size={48} src={item.avatar} />
                                        }
                                        title={item.title}
                                        description={item.description}
                                    />
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>
            <Card
                className="header-solid mb-24"
                title={
                    <>
                        <h6 className="font-semibold">Projects</h6>
                        <p>Architects design houses</p>
                    </>
                }
            >
                <Row gutter={[24, 24]}>
                    {project.map((p, index) => (
                        <Col span={24} md={12} xl={6} key={index}>
                            <Card
                                className="card-project"
                                cover={<img alt="example" src={p.img} />}
                            >
                                <div className="card-tag">{p.titlesub}</div>
                                <p>{p.disciption}</p>
                                <Row gutter={[6, 0]} className="card-footer">
                                    <Col span={12}>
                                        <Button type="default">VIEW PROJECT</Button>
                                    </Col>
                                    <Col span={12} className="text-right">
                                        <Avatar.Group className="avatar-chips">
                                            <Avatar size="small" src={profilavatar} />
                                            <Avatar size="small" src={convesionImg} />
                                            <Avatar size="small" src={convesionImg2} />
                                            <Avatar size="small" src={convesionImg3} />
                                        </Avatar.Group>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Card>
        </>
    );
}

export default Profile;


