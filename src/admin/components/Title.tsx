interface Props {
  title: string;
  description: string;
}
export const Title = ({ title, description }: Props) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/20 flex items-center">
      <div className="px-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
          {title}
        </h1>
        <p className="text-primary-foreground/80 mt-2 text-sm md:text-base max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
};
