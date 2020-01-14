import React, { Component } from 'react';
import { Row, Col, Card, Input, Button } from 'antd';
import BraftEditor from 'braft-editor';
import { observer } from "mobx-react";
import LinkMan from "~/mobx/link";
import { connect } from "react-redux";
@connect(
    state=>{
        return {
            pic: state.getIn(["avatar", "pic"])
        }
    }
)
@observer
class postArt extends Component {
    state = {
        editorState: BraftEditor.createEditorState(null)
    }
    goBack = () => {
        this.props.history.push("/destiny/linkman")
        LinkMan.resetArticleList()
        this.setState({
            editorState: null
        })
    }

    handleChangeText = (editorState) => {
        console.log(editorState.toHTML())
        const htmlString = editorState.toHTML()
        this.setState({ editorState: htmlString })
        LinkMan.changeContent(htmlString)

    }
    handleChangeTitle = (e) => {
        console.log(e.target.value)
        let title = e.target.value
        LinkMan.changeTitle(title)
    }
    handleSubmit = () => {
        console.log(LinkMan.articleList)
        LinkMan.submitArticle({
            url: "/react/upArticle",
            data: LinkMan.articleList
        })
        this.goBack()
    }
    componentDidMount() {
        let admin = sessionStorage.mobile;
        LinkMan.changeAdmin(admin)
        let avatar = this.props.pic
        LinkMan.changeAvatar(avatar)
    }
    render() {
        const {
            editorState
        } = this.state
        const { articleList } = LinkMan
        const controls = [
            'undo', 'redo', 'separator',
            'font-size', 'line-height', 'letter-spacing', 'separator',
            'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator',
            'superscript', 'subscript', 'remove-styles', 'emoji', 'separator', 'text-indent', 'text-align', 'separator',
            'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
            'link', 'separator', 'hr', 'separator',
            'media', 'separator',
            'clear'
        ]
        return (
            <div>
                <Row gutter={24}>
                    <Col span={24}>
                        <Card
                            title="发表帖子"
                            extra={<span onClick={this.goBack} style={{ color: "#0099cc" }}>返回</span>}
                        >
                            <Row gutter={12}>
                                <Col span={12}>
                                    <Input
                                        value={articleList.title}
                                        addonBefore="标题："
                                        placeholder="请输入标题"
                                        onChange={this.handleChangeTitle}
                                    />
                                </Col>
                            </Row>
                            <Row gutter={24} style={{ marginTop: 10 }}>
                                <Col span={24}>
                                    <BraftEditor
                                        value={editorState}
                                        controls={controls}
                                        onChange={this.handleChangeText}
                                    />
                                </Col>
                            </Row>
                            <Row gutter={24} style={{ marginTop: 10 }}>
                                <Col span={24}>
                                    <div style={{ display: "flex", flexDirection: "row-reverse", }}>
                                        <Button type="danger" onClick={this.goBack}>取消</Button>
                                        <Button type="primary" onClick={this.handleSubmit} style={{ marginRight: 10 }}>确定</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default postArt;