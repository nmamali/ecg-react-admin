import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ImageField,
    SimpleForm,
    SelectInput,
    TextInput,
    Edit,
    Create,
    DateInput,
    Filter,
    ImageInput,
    SelectArrayInput,
    FileInput,
    FileField,
    Show,
    SimpleShowLayout,
    RichTextField, DateField,
} from 'react-admin';
import {RichTextInput} from 'ra-input-rich-text';
import {bursaryCategories, categoryChoices} from "../constants/constants";


const ListingsFilter = (props) => (
    <Filter {...props}>
        <TextInput
            label="Search"
            name="title"
            source="title"
            alwaysOn
        />
    </Filter>
);

export const JobsList = props => (
    <List  filters={<ListingsFilter />}  {...props}>
        <Datagrid rowClick="show">
            <TextField source="title" />
        </Datagrid>
    </List>
);

export const JobsCreate = props => (
    <Create {...props} title={"Create a Job"}>
        <SimpleForm>
            <TextInput
                source="title"
                name="title"
                fullWidth={true}
                required={true}
            />
            <TextInput
                fullWidth={true}
                source="location"
                name="location"
                required={true}

            />
            <TextInput
                fullWidth={true}
                source="salary"
                name="salary"
                required={true}
            />
            <SelectArrayInput
                label="Type of Job"
                source="category"
                choices={categoryChoices}
                optionText="category"
                optionValue="category"
                options={{ autoWidth: true }}
                resettable

                sx={{width: 600}}
            />

            <TextInput
                fullWidth={true}
                source="email"
                name="email"
                type={"email"}
            />
            <DateInput
                fullWidth={true}
                source="closingDate"
                name="closingDate"
            />
            <TextInput
                fullWidth={true}
                source="applicationUrl"
                name="applicationUrl"
                type={"url"}
            />
            <ImageInput
                source="pictures"
                label="Picture"
                multiple={true}
                accept="image/*" name={""}
            >
                <ImageField
                    source="imageUrl"
                    title="title"
                    className={"post-image"}
                    sx={{
                        '& .RaImageField-image': {
                            width: 200,
                            height: 200,
                        },

                    }}
                />
            </ImageInput>

            <FileInput
                source="pdfUrl"
                label="Application Form"
                accept="application/pdf"
                name={"pdfUrl"}
            >
                <FileField
                    source="pdfUrl"
                    title="PDF Application Form"
                />
            </FileInput>


            <RichTextInput
                description multiple={true}
                fullWidth={true}
                source="description"
                name="description"
                validation={{ required: true }}/>
        </SimpleForm>
    </Create>
);


export const ListingsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput
                source="title"
                name="title"
                fullWidth={true}
            />
            <TextInput
                fullWidth={true}
                source="location"
                name="location"
            />
            <TextInput
                fullWidth={true}
                source="salary"
                name="salary"
            />
            <SelectArrayInput
                label="Type of Job"
                source="category"
                choices={categoryChoices}
                optionText="category"
                optionValue="category"
                options={{ autoWidth: true }}
                resettable

                sx={{width: 600}}
            />
            <TextInput
                fullWidth={true}
                source="email"
                name="email"
            />
            <ImageInput
                source="pictures"
                label="Picture"
                multiple={true}
                accept="image/*" name={""}
            >
                <ImageField
                    source="imageUrl"
                    title="title"
                    className={"post-image"}
                    sx={{
                        '& .RaImageField-image': {
                            width: 200,
                            height: 200,
                        },

                    }}
                />
            </ImageInput>

            <FileInput
                source="pdfUrl"
                label="Application Form"
                accept="application/pdf"
                name={"pdfUrl"}
            >
                <FileField
                    source="pdfUrl"
                    title="PDF Application Form"
                />
            </FileInput>
            <TextInput
                fullWidth={true}
                source="applicationUrl"
                name="applicationUrl"
            />
            <DateInput
                fullWidth={true}
                source="closingDate"
                name="closingDate"
            />
            <RichTextInput
                description multiple={true}
                fullWidth={true}
                source="description"
                name="description"
                validation={{ required: true }}
            />

        </SimpleForm>
    </Edit>
);


export const JobShow = () => (
    <Show title={"View Job Post"}>
        <SimpleShowLayout>
            <TextField source="title" />
            <TextField source="company" />
            <TextField source="salary" />
            <TextField source="location" />
            <DateField label="closing Date" source="closingDate" />

            <RichTextField source="description" />
        </SimpleShowLayout>
    </Show>
);