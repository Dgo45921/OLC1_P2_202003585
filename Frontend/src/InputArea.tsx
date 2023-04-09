import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './InputArea.css';
import { Button } from 'react-bootstrap';

function InputArea() {
    const [tabs, setTabs] = useState([
        { language: "java", code: "" },
    ]);

    const handleTabAdd = () => {
        setTabs([...tabs, { language: "tw", code: "" }]);
    }

    const handleTabRemove = (index: number) => {
        const newTabs = tabs.filter((tab, i) => i !== index);
        setTabs(newTabs);
    }

    const handleCodeChange = (value: string | undefined, index: number) => {
        const newTabs = [...tabs];
        if (typeof value === "string") {
            newTabs[index].code = value;
        }
        setTabs(newTabs);
    }

    return (
        <div>



            <Tabs className="tabs">


                <TabList className="tab-list">
                    {tabs.map((tab, index) => (
                        <Tab key={index} className="tab">
                            {"tw("}{index + 1}{")"}
                            <button
                                onClick={() => handleTabRemove(index)}
                                className="remove-tab-btn"
                            >
                                x
                            </button>
                        </Tab>

                    ))}

                    <Tab className="tab2" onClick={handleTabAdd}>+</Tab>
                </TabList>

                {tabs.map((tab, index) => (
                    <TabPanel key={index} className="tab-panel">
                        <Editor
                            height={"800px"}
                            width={"100%"}
                            theme={"vs-dark"}
                            language={tab.language}
                            value={tab.code || ''}
                            onChange={(value) => handleCodeChange(value, index)}
                        />
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    )
}

export default InputArea