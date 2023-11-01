import InputSelect from "@/app/components/Form/Select";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import Select, { components } from "react-select";
import { CustomDropdownIndicator } from "./CustomDropdown";
import { useLoadingContext } from "@/app/context/loading";
import { BlogsService } from "@/app/services/BlogsService";
import Preloader from "@/app/components/Preloader/Preloader";
type Option = {
    label: string;
    value: string;
};
const options = [
    { label: "Blogs", value: "/blogs", isOptionDisabled: true },
    { label: "Videos", value: "/blogs/videos", isOptionDisabled: false }, // Скрыть эту опцию
];
const sortType = [
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
    // Добавьте другие варианты сортировки при необходимости
];

const BlogsPage = () => {
    const { register, control, handleSubmit, reset } = useForm();
    const router = useRouter();
    const { isLoading, setIsLoading } = useLoadingContext();
    const [blogs, setBlogs] = React.useState<any>([]);
    const [selectedValue, setSelectedValue] = React.useState(options[0]);
    const [selectedSortingOption, setSelectedSortingOption] =
        React.useState<Option | null>(sortType[0]);

    const [sorting, setSorting] = React.useState("newest"); // Стейт для хранения выбранной сортировки

    const handleSelectChange = (selectedOption: Option | null) => {
        if (selectedOption !== null) {
            router.push(selectedOption.value);
        }
    };
    const customStyles = {
        option: (provided: any, state: any) => ({
            ...provided,
            display: state.data.isOptionDisabled ? "none" : "block",
        }),
    };

    React.useEffect(() => {
        setIsLoading(true);
        BlogsService.getBlogs()
            .then((res) => setBlogs(res.data.Artical))
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);
    const handleSortingChange = (selectedOption: Option | null) => {
        setSelectedSortingOption(selectedOption);
        if (selectedOption?.value === "oldest") {
            setBlogs([...blogs].reverse()); // Переворачиваем массив блогов
        } else {
            setBlogs([...blogs].reverse()); // Оставляем массив блогов без изменений
        }
    };

    if (!blogs) return <Preloader />;
    return (
        <section className="section">
            <div className="section__header flex flex-wrap gap2">
                <div className="section__header-left">
                    <div className="section__header-select">
                        <div className="section__header-select-title">
                            <Select
                                components={{
                                    DropdownIndicator: CustomDropdownIndicator,
                                }}
                                classNamePrefix="blogs"
                                options={options}
                                value={selectedValue}
                                onChange={(value) => handleSelectChange(value)}
                                styles={customStyles} // Применяем наши стили
                            />
                        </div>
                    </div>
                    <div className="section__header-select">
                        {" "}
                        <span>Sort By</span>
                        <Select
                            classNamePrefix="default"
                            placeholder="Oldest"
                            defaultValue={sortType[0]}
                            options={sortType}
                            onChange={(selectedOption) =>
                                handleSortingChange(selectedOption)
                            }
                        />
                        {/* <InputSelect
              prefix="default"
              placeholder="Oldest"
              control={control}
              options={[]}
              register={{ ...register("all__leads") }}
            /> */}
                    </div>
                </div>
                <div className="section__header-right w-full md:w-auto">
                    <button
                        onClick={() => router.push("/blogs/upload")}
                        className="btn w-full md:w-auto"
                    >
                        Upload Blog
                    </button>
                </div>
            </div>
            <div className="section__content">
                <div className="blogs__wrapper">
                    {blogs.map((item: any, index: number) => (
                        <div
                            onClick={() => router.push(`/blogs/${item.id}`)}
                            className="blogs__item"
                        >
                            <div className="blogs__item-img">
                                <img src={item.image} />
                            </div>
                            <div className="blogs__item-content">
                                <div className="blogs__item-content-wrapper">
                                    {item.tags.map((el: string) => (
                                        <div className="blogs__item-content-type">
                                            {el}
                                        </div>
                                    ))}
                                </div>
                                <p>{item.title}</p>
                                <div className="blogs__item-content-desc">
                                    {item.date} by <span>{item.author}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogsPage;
