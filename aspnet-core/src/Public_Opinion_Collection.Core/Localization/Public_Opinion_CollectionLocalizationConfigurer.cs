using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace Public_Opinion_Collection.Localization
{
    public static class Public_Opinion_CollectionLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(Public_Opinion_CollectionConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(Public_Opinion_CollectionLocalizationConfigurer).GetAssembly(),
                        "Public_Opinion_Collection.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
